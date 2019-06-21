import getDocumentRoot from '../../utils/getDocumentRoot'
import traverser from './util/traverser'

const generateIndexHTML = (fileMapping, currentPath, deepLevel) => {
  const result = traverser(fileMapping, currentPath)
  const documentRoot = getDocumentRoot(deepLevel)
  return `
      <li ${(deepLevel === -1) ? 'class="active"' : ''}><a href="./${documentRoot}index.html">
        Home
      </a></li>
    ${result}`
}

export default generateIndexHTML
