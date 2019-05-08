import pageMapTraverser from './src/libs/pageMapTraverser'
import initialSettings from './src/libs/initialSettings'
import mdFileReader from './src/libs/mdFileReader'
import mdParser from './src/libs/mdParser'
import filer from './src/libs/filer'
import genFile from './src/libs/genFile'
import genFoler from './src/libs/genFolder'

const run = async () => {
  const rootDir = process.cwd()
  const setting = await initialSettings()
  const pageList = await filer(setting.source)

  pageMapTraverser(pageList, async (title, path) => {
    await genFoler(path, title, setting)
  })
  pageMapTraverser(pageList, async (title, path) => {
    const mdDocument = await mdFileReader(`${rootDir}/${path}`)
    const result = mdParser(mdDocument)
    await genFile(path, title, result, setting)
  })
}

run()
