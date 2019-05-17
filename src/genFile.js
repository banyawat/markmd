import smartFs from 'smart-fs'


const htmlForm = (data, deepLevel) => {
  const { title, dataInDoc, indexString } = data
  console.log(deepLevel)
  let pathToRoot = ''
  for (let i = 0; i < deepLevel + 1; i += 1) {
    pathToRoot += '../'
  }
  return `<!DOCTYPE html>
  <html>
  <head>
    <style>
    .item1 { grid-area: header; }
    .item2 { grid-area: menu; }
    .item3 { grid-area: main; }
    
    .grid-container {
      display: grid;
      grid-template-areas:
        'header header header header header header'
        'menu main main main right right'
        'menu footer footer footer footer footer';
      grid-gap: 10px;
    }

    ul{
      padding-left: 25px;
    }
    </style>
    <link rel="stylesheet" type="text/css" href="./${pathToRoot}styles/index.css">
  </head>
  <body>
  
  <h1>${title}</h1>
    
  <div class="grid-container">
    <div class="item1">${title}</div>
    <div class="item2">${indexString}</div>
    <div class="item3">${dataInDoc}</div>  
  </div>
  
  </body>
  </html>`
}


const genFile = async (data, settings, deepLevel) => {
  const { path } = data
  const text = htmlForm(data, deepLevel)
  let dir = path.replace('.md', '.html')
  dir = dir.replace(settings.source, `${settings.destination}/${settings.source}`)
  smartFs.smartWrite(`.${dir}`, [text])
}

export default genFile
