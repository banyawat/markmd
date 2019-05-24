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

  console.log(`${exportedPath}${newPath.join('/')}/${newFileName}`)
  return `${exportedPath}${newPath.join('/')}/${newFileName}`
}

const indexTraverser = node => Object.keys(node)
  .sort(a => (typeof node[a] === 'object'))
  .map((key) => {
    if (key === '_') {
      return node._.sort((a, b) => a.path.length > b.path.length).map(item => `<li><a href="${replacePathAsHTML(item.path)}">${item.title}</a></li>`).join('')
    }
    return `<li>${key}<ul>${indexTraverser(node[key])}</ul></li>`
  }).map(item => `
  <ul>
    ${item}
  </ul>`)
  .join('')


const indexer = (fileMapping, currentPath) => {
  console.log('========= Start indexing ==========')
  console.log('PATH: ', currentPath)
  activePath = currentPath
  const result = indexTraverser(fileMapping)
  return `${result}`
}

export default indexer
