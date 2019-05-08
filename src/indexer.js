const indexTraverser = node => Object.keys(node).map((key) => {
  if (key === '_') {
    return node._.map(item => `<li>${item.title}</li>`).join('')
  }
  return `<li>${key}<ul>${indexTraverser(node[key])}</ul></li>`
}).map(item => `<ul>${item}</ul>`).join('')


const indexer = (fileMapping) => {
  console.log('========= Start indexing ==========')
  console.log(fileMapping)
  const result = indexTraverser(fileMapping)
  console.log(JSON.stringify(result))
  console.log('===================================')
}

export default indexer
