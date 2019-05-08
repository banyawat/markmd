import pageMapTraverser from './src/libs/pageMapTraverser'
import initialSettings from './src/libs/initialSettings'
import mdFileReader from './src/libs/mdFileReader'
import indexer from './src/indexer'
import mdParser from './src/libs/mdParser'
import genFile from './src/libs/genFile'
import filer from './src/libs/filer'

const run = async () => {
  const rootDir = process.cwd()
  const setting = await initialSettings()
  const fileMap = await filer(setting.source)
  indexer(fileMap)
  // console.info('\nStart read doc\n')
  // pageMapTraverser(fileMap, async (title, path) => {
  //   console.log(title, path)
  //   const mdDocument = await mdFileReader(`${rootDir}/${path}`)
  //   console.info('\n------------------------------------------------------')
  //   console.info(`<O> PATH = ${path}`)
  //   console.info('------------------------------------------------------')
  //   const result = mdParser(mdDocument)
  //   console.info(result)
  //   console.info('\n')
  //   genFile(path, title, result, setting)
  // })
}

run()
