import mkdirp from 'mkdirp'
import fs from 'fs'

const genFolder = (path, filename) => {
  let dir = path.replace(`${filename}.md`, '')
  dir = dir.replace('docs', 'apidoc/docs')
  if (!fs.existsSync(dir)) {
    mkdirp(`.${dir}`)
    console.info(`${dir} Folder Create Success!!!`)
  }
}

export default genFolder
