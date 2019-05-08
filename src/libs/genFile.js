import fs from 'fs'
import mkdirp from 'mkdirp'

const genFile = async (path, filename, data) => {
  const fileName = `${filename}.html`
  const text = `<html>${data}</html>`
  let dir = path.replace(`${filename}.md`, '')
  dir = dir.replace('docs', 'apidoc')

  if (!fs.existsSync(dir)) {
    await mkdirp(`.${dir}`)
  }
  fs.writeFile(`.${dir}${fileName}`, text, (err) => {
    if (err) throw err
    console.info(`${dir}${fileName} Create Success!!!`)
  })
}

export default genFile
