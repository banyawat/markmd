const indexTraverser = node => Object.keys(node)
  .sort(a => (typeof node[a] === 'object'))
  .map((key) => {
    if (key === '_') {
      return node._
        .sort((a, b) => a.path.length > b.path.length)
        .map(item =>
          // const path = replacePathAsHTML(item.path)
          `<li ${(item.path === '#') ? 'class="active"' : ''}><a href="${item.path}">${item.title}</a></li>`)
        .join('')
    }
    return `<li>${key}<ul>${indexTraverser(node[key])}</ul></li>`
  }).map(item => `
  <ul>
    ${item}
  </ul>`)
  .join('')

const generateVersionIndexHTML = (fileMapping, currentPath, deepLevel) => {
  console.log('================')
  // const result = indexTraverser(fileMapping)
  // console.log(result)
  const versions = []
  Object.keys(fileMapping)
    .sort((a, b) => a > b)
    .forEach((folderName) => {
      console.log(folderName)
      const result = indexTraverser(fileMapping[folderName])
      versions.push({
        version: folderName,
        index: result,
      })
    })

  console.log('================')

  const index = `<div>
    <select>
      ${versions.map(version => `<option>${version.version}</option>`).join('').toString()}
    </select>
    <ul>
      ${versions.map(version => `<li>${}</li>`).join('')}
    </ul>
</div>`
  console.log(index)
  return index
}

export default generateVersionIndexHTML
