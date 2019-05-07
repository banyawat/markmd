const traverse = (fileMap, callback) => {
  Object.keys(fileMap).forEach((map) => {
    if (map === '_') {
      fileMap[map].forEach((file) => {
        callback(file.title, file.path)
      })
    } else {
      traverse(fileMap[map], callback)
    }
  })
}

export default traverse
