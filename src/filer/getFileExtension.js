const getFileExtension = (path) => {
  const item = path.split('/')
  const splittedPath = item[item.length - 1]
  const splittedFileName = splittedPath.split('.')
  return splittedFileName[splittedFileName.length - 1]
}

export default getFileExtension
