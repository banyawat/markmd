import smartFs from 'smart-fs'


const htmlForm = (data, deepLevel) => {
  const { title, body, indexNode } = data
  let documentRoot = ''
  if (deepLevel !== -1) {
    for (let i = 0; i < deepLevel + 1; i += 1) {
      documentRoot += '../'
    }
  }
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="./${documentRoot}styles/index.css">
    </head>
    <body>
      <div class="grid-container">
        <div class="menu">
          <a href="./${documentRoot}index.html">
            Home
          </a>
          ${indexNode}
        </div>
        <div class="page">
          ${body}
        </div>
      </div>
      <footer class="footer">
        <span>Powered By teusday and byteties, Hosted on 
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://github.com/banyawat/markmd">
            Github
            </a>
        </span>
      </footer>
    </body>
  </html>`
}

const generateHTMLFile = async (data, settings, deepLevel, isIndex = false) => {
  const { path } = data
  const text = htmlForm(data, deepLevel)
  let dir
  if (isIndex) {
    dir = path.replace('README.md', 'index.html')
    dir = dir.replace(settings.source, `${settings.destination}`)
  } else {
    dir = path.replace('.md', '.html')
    dir = dir.replace(settings.source, `${settings.destination}/${settings.source}`)
  }
  await smartFs.smartWrite(`.${dir}`, [text])
}

export default generateHTMLFile
