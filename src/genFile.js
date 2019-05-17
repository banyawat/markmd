import smartFs from 'smart-fs'


const htmlForm = (data) => {
  const { title, dataInDoc, indexString } = data
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


const genFile = async (data, settings) => {
  const { path } = data
  const text = htmlForm(data)
  let dir = path.replace('.md', '.html')
  dir = dir.replace(settings.source, `${settings.destination}/${settings.source}`)
  smartFs.smartWrite(`.${dir}`, [text])
}

export default genFile
