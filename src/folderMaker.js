import fs from 'fs'
import mkdirp from 'mkdirp'
import pageMapTraverser from './libs/pageMapTraverser'

const folderMaker = async (fileMap) => {
  await pageMapTraverser(fileMap, async (title, path) => {
    let newArray = path.split('/')
    newArray.pop()
    newArray[1] = 'apidoc'
    newArray = newArray.join('/')
    if (!fs.existsSync(newArray)) {
      await mkdirp(`.${newArray}`)
    }
  })
}

export default folderMaker
