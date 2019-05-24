import smartFs from 'smart-fs'
import log from './utils/log'


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
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="./${documentRoot}styles/index.css">
    </head>
    <body>
      <div class="grid-container">
        <div class="menu">
            <span></span>
            <span></span>
            <span></span>
            <input type="checkbox" />
          <div class="menu-content">
            <a href="./${documentRoot}index.html">
              Home
            </a>
            ${indexNode}
          </div>
        </div>
        <div class="page">
          ${body}
        </div>
        <div class="footer">
          <span>Powered By teusday and byteties, Hosted on 
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://github.com/banyawat/markmd">
              Github
              </a>
          </span>
        </div>
      </div>
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
  log.compile(`${path} ==> ${dir}`)
}

export default generateHTMLFile
