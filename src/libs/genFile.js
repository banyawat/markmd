import fs from 'fs'
import mkdirp from 'mkdirp'

const genFile = async (path, filename, data, settings) => {
  const fileName = `${filename}.html`
  const text = `<html>${data}</html>`
  let dir = path.replace(`${filename}.md`, '')
  dir = dir.replace(settings.source, settings.destination)

  if (!fs.existsSync(dir)) {
    await mkdirp(`.${dir}`)
  }
  fs.writeFile(`.${dir}${fileName}`, text, (err) => {
    if (err) throw err
    console.info(`${dir}${fileName}`)
  })
}

export default genFile
