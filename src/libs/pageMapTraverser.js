const traverse = (
  fileMap,
  callback,
) => Promise.all(Object.keys(fileMap).map(async (map) => {
  if (map === '_') {
    fileMap[map].forEach((file) => {
      callback(file.title, file.path)
    })
  } else {
    await traverse(fileMap[map], callback)
  }
}))

export default traverse
