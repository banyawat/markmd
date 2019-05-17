// import fs from 'fs'
import smartFs from 'smart-fs'

const genFile = async (path, filename, data, settings) => {
  const fileName = `${filename}.html`
  const text = `<html>${data}</html>`
  let dir = path.replace(`${filename}.md`, '')
  dir = dir.replace(settings.source, settings.destination)
  // console.log(smartFs.smartWrite(`.${dir}${fileName}`))
  // process.exit(0)
  const newBuff = await Buffer.from(text)
  smartFs.smartWrite(`.${dir}${fileName}`, newBuff)
}

export default genFile
