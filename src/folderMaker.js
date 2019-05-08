import fs from 'fs'
import mkdirp from 'mkdirp'
import deepFlatten from './libs/deepFlatten'

const folderTraverse = (node, path = './apidoc') => Object.keys(node).map((key) => {
  if (key === '_') {
    return `${path}`
  }
  return folderTraverse(node[key], `${path}/${key}`)
})

const folderMaker = (fileMap) => {
  console.log('Create folder')
  const result = deepFlatten(folderTraverse(fileMap)).sort((a, b) => a > b)
  return Promise.all(result.map(async (path) => {
    if (!fs.existsSync(path)) {
      mkdirp(path)
      console.info(`${path} Folder Create Success!!!`)
    }
  }))
}

export default folderMaker
