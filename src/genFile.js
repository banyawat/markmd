import smartFs from 'smart-fs'


const htmlForm = (data, deepLevel) => {
  const { title, dataInDoc, indexString } = data
  let pathToRoot = ''
  for (let i = 0; i < deepLevel + 1; i += 1) {
    pathToRoot += '../'
  }
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="./${pathToRoot}styles/index.css">
    </head>
    <body>
      <div class="grid-container">
        <div class="menu">${indexString}</div>
        <div class="page">
          ${dataInDoc}
        </div>
      </div>
      <footer class="footer">
        <span>Powered By teusday and byties, Hosted on 
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


const genFile = async (data, settings, deepLevel) => {
  const { path } = data
  const text = htmlForm(data, deepLevel)
  let dir = path.replace('.md', '.html')
  dir = dir.replace(settings.source, `${settings.destination}/${settings.source}`)
  await smartFs.smartWrite(`.${dir}`, [text])
}

export default genFile
