import getDocumentRoot from '../../utils/getDocumentRoot'
import traverser from './util/traverser'

const generateVersionIndexHTML = (fileMapping, currentPath, deepLevel) => {
  let currentVersionFolder
  if (deepLevel !== -1) {
    const splitted = currentPath.split('/')
    currentVersionFolder = splitted[splitted.length - deepLevel - 1]
  }

  const versions = []
  Object.keys(fileMapping)
    .sort((a, b) => a > b)
    .forEach((folderName) => {
      const result = traverser(fileMapping[folderName], currentPath)
      versions.push({
        version: folderName,
        index: result,
      })
    })
  const documentRoot = getDocumentRoot(deepLevel)
  return `<div>
  <li ${(deepLevel === -1) ? 'class="active"' : ''}>
    <a href="./${documentRoot}index.html">
      Home
    </a>
  </li>
  <select id="version-menu" class="version-selector">
    ${versions.map(version => `<option
      ${(currentVersionFolder === version.version) ? 'selected' : ''}
    >
    ${version.version}
    </option>`).join('').toString()}
  </select>
  <ul id="version-menu-list">
    ${versions.map(version => `<li id="indexlist-${version.version}" >${version.index}</li>`).join('')}
  </ul>
  <script>
    function hideElement (id) {
      document.querySelectorAll('[id^="indexlist-"]').forEach(function (e) {
        e.className = 'hide'
      })
      document.getElementById(id.toString()).className = ''
    }
    hideElement(document.querySelector('[id^="${(currentVersionFolder) ? `indexlist-${currentVersionFolder}` : 'indexlist-'}"]').id)
    document.getElementById('version-menu').onchange = function (element) {
      console.log(element)
      hideElement('indexlist-' + element.target.value)
    }
  </script>
</div>`
}

export default generateVersionIndexHTML
