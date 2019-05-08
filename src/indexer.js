const rootDir = process.cwd()
let sourcePath
let destinationPath

const pathReplace = (path) => {
  let newPath
  newPath = path.split('/')
  newPath[1] = `${destinationPath}/${sourcePath}`
  const splittedFileName = newPath[newPath.length - 1].split('.')
  splittedFileName[splittedFileName.length - 1] = 'html'
  newPath[newPath.length - 1] = splittedFileName.join('.')
  newPath = newPath.join('/')
  return newPath
}

const indexTraverser = node => Object.keys(node).map((key) => {
  if (key === '_') {
    return node._.map(item => `<li><a href="${rootDir}${pathReplace(item.path)}">${item.title}</a></li>`).join('')
  }
  return `<li>${key}<ul>${indexTraverser(node[key])}</ul></li>`
}).map(item => `<ul>${item}</ul>`)
  .join('')


const indexer = (fileMapping, settings) => {
  destinationPath = settings.destination
  sourcePath = settings.source
  console.log('========= Start indexing ==========')
  const result = indexTraverser(fileMapping)
  return result
}

export default indexer
