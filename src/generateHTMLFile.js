import smartFs from 'smart-fs'
import log from './utils/log'
import getDocumentRoot from './utils/getDocumentRoot'

const htmlForm = (data, deepLevel) => {
  const { title, body, indexNode } = data
  const documentRoot = getDocumentRoot(deepLevel)
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="./${documentRoot}styles/index.css">
    </head>
    <body>
      <div class="container">
        <button 
          id="mobile-menu"
          class="mobile-menu"
        >
          Menu
        </button>
        <script>
          document.getElementById('mobile-menu').onclick = function() {
            var isActive = document.getElementById('menu').className.split(' ').includes('active')
            if(!isActive) {
              document.getElementById('menu').className = 'menu active'
            } else {
              document.getElementById('menu').className  = 'menu'
            }
          }
        </script>
        <div id="menu" class="menu">
          <div class="menu-content">
            ${indexNode}
          </div>
        </div>
        <div class="page">
          ${body}
        </div>
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
