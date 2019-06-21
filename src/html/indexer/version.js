import getDocumentRoot from '../../utils/getDocumentRoot'

let activePath

const replacePathAsHTML = (path) => {
  const newPath = path.split('/')
  const splittedCurrentPath = activePath.split('/')
  newPath.shift()
  splittedCurrentPath.shift()
  if (splittedCurrentPath.join('') === newPath.join('')) {
    return '#'
  }
  let newFileName = newPath.pop().split('.')
  newFileName[newFileName.length - 1] = 'html'
  newFileName = newFileName.join('.')
  let exportedPath = './'
  for (let i = 0; i < splittedCurrentPath.length - 1; i += 1) {
    exportedPath += '../'
  }
  return `${exportedPath}${newPath.join('/')}/${newFileName}`
}

const indexTraverser = node => Object.keys(node)
  .sort(a => (typeof node[a] === 'object'))
  .map((key) => {
    if (key === '_') {
      return node._
        .sort((a, b) => a.path.length > b.path.length)
        .map((item) => {
          const path = replacePathAsHTML(item.path)
          return `<li ${(path === '#') ? 'class="active"' : ''}><a href="${path}">${item.title}</a></li>`
        })
        .join('')
    }
    return `<li>${key}<ul>${indexTraverser(node[key])}</ul></li>`
  }).map(item => `
  <ul>
    ${item}
  </ul>`)
  .join('')

const generateVersionIndexHTML = (fileMapping, currentPath, deepLevel) => {
  activePath = currentPath
  let currentVersionFolder
  if (deepLevel !== -1) {
    const splitted = activePath.split('/')
    currentVersionFolder = splitted[splitted.length - deepLevel - 1]
  }

  const versions = []
  Object.keys(fileMapping)
    .sort((a, b) => a > b)
    .forEach((folderName) => {
      const result = indexTraverser(fileMapping[folderName])
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
