const traverse = (fileMap, callback) => Promise.all(Object.keys(fileMap).map((map) => {
  if (map === '_') {
    fileMap[map].forEach((file) => {
      callback(file.title, file.path)
    })
  } else {
    traverse(fileMap[map], callback)
  }
}))

export default traverse
