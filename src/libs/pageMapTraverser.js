const traverse = (fileMap) => {
  Object.keys(fileMap).map((map) => {
    console.log(map)
    if (map !== '_') {
      traverse(fileMap[map])
    } else {
      console.log(fileMap[map])
    }
  })
}

const pageMapTraverser = (fileMap) => {
  console.log('----------------------------')
  console.log('Page mapping traverser')
  console.log(fileMap)
  console.log('----------------------------')
  traverse(fileMap)
}

export default pageMapTraverser
