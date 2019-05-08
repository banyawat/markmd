import fs from 'fs'

const genFile = async (path, filename, data, settings) => {
  const fileName = `${filename}.html`
  const text = `<html>${data}</html>`
  let dir = path.replace(`${filename}.md`, '')
  dir = dir.replace(settings.source, settings.destination)
  fs.writeFile(`.${dir}${fileName}`, text, (err) => {
    if (err) throw err
    console.info(`${dir}${fileName} Create Success!!!`)
  })
}

export default genFile
