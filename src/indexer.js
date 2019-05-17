let activePath

const replacePathAsHTML = (path) => {
  const newPath = path.split('/')
  const splittedCurrentPath = activePath.split('/')
  newPath.shift()
  splittedCurrentPath.shift()
  splittedCurrentPath.pop()
  if (splittedCurrentPath.join('') === newPath.join('')) {
    return '#'
  }
  let fileName = newPath.pop().split('.')
  fileName[fileName.length - 1] = 'html'
  fileName = fileName.join('.')
  let exportedPath = './'
  for (let i = 0; i < splittedCurrentPath.length; i += 1) {
    exportedPath += '../'
  }
  return `${exportedPath}${newPath.join('/')}/${fileName}`
}

const indexTraverser = node => Object.keys(node)
  .sort(a => (typeof node[a] === 'object'))
  .map((key) => {
    if (key === '_') {
      return node._.sort((a, b) => a.path.length > b.path.length).map(item => `<li><a href="${replacePathAsHTML(item.path)}">${item.title}</a></li>`).join('')
    }
    return `<li>${key}<ul>${indexTraverser(node[key])}</ul></li>`
  }).map(item => `<ul>${item}</ul>`)
  .join('')


const indexer = (fileMapping, currentPath) => {
  console.log('========= Start indexing ==========')
  activePath = currentPath
  const result = indexTraverser(fileMapping)
  return result
}

export default indexer
