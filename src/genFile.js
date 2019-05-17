import smartFs from 'smart-fs'

const genFile = async (path, filename, data, settings) => {
  const fileName = `${filename}.html`
  const text = `<html>${data}</html>`
  let dir = path.replace(`${filename}.md`, '')
  dir = dir.replace(settings.source, settings.destination)
  smartFs.smartWrite(`.${dir}${fileName}`, [text])
}

export default genFile
