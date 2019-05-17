const traverse = (
  fileMap,
  callback,
  deepLevel,
) => Promise.all(Object.keys(fileMap).map(async (map) => {
  if (map === '_') {
    fileMap[map].forEach((file) => {
      callback(file.title, file.path, deepLevel)
    })
  } else {
    await traverse(fileMap[map], callback, deepLevel + 1)
  }
}))

export default traverse
