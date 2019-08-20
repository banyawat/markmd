import replacePathAsHTML from './replacePathAsHTML'

const indexTraverser = (node, activePath) => Object.keys(node)
  .sort(a => (typeof node[a] === 'object'))
  .map((key) => {
    if (key === '_') {
      return node._
        .sort((a, b) => a.path.length > b.path.length)
        .map((item) => {
          const path = replacePathAsHTML(item.path, activePath)
          return `<li ${(path === '#') ? 'class="active"' : ''}><a href="${path}">${item.title}</a></li>`
        })
        .join('')
    }
    return `<li>${key}${indexTraverser(node[key], activePath)}</li>`
  }).map(item => `
  <ul>
    ${item}
  </ul>`)
  .join('')

export default indexTraverser
