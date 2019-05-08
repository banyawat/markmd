const replaceExtension = (path, replaceString) => {
  const item = path.split('/')
  const splittedPath = item[item.length - 1]
  const splittedFileName = splittedPath.split('.')
  return splittedFileName
}

export default replaceExtension
