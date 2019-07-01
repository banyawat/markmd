const replacePathAsHTML = (path, activePath) => {
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

export default replacePathAsHTML
