import mkdirp from 'mkdirp'
import fs from 'fs'

const genFolder = (path, filename, settings) => {
  let dir = path.replace(`${filename}.md`, '')
  dir = dir.replace(settings.source, settings.destination)
  if (!fs.existsSync(dir)) {
    mkdirp(`.${dir}`)
    console.info(`${dir} Folder Create Success!!!`)
  }
}

export default genFolder
