import pageMapTraverser from './src/libs/pageMapTraverser'
import loadSettings from './src/libs/loadSettings'
import validatePath from './src/libs/validatePath'
import mdFileReader from './src/libs/mdFileReader'
import mdParser from './src/libs/mdParser'
import genFile from './src/libs/genFile'
import filer from './src/libs/filer'

const run = async () => {
  const rootDir = process.cwd()
  const setting = await loadSettings()
  if (!validatePath(setting)) {
    process.exit(0)
  }
  const pageList = await filer(setting.target)
  // console.log(pageList)
  console.info('\nStart read doc\n')
  pageMapTraverser(pageList, async (title, path) => {
    // console.log(title, path)
    const mdDocument = await mdFileReader(`${rootDir}/${path}`)
    // console.info('\n------------------------------------------------------')
    // console.info(`<O> PATH = ${path}`)
    // console.info('------------------------------------------------------')
    const result = mdParser(mdDocument)
    // console.info(result)
    // console.info('\n')
    console.log('*')
    await genFile(path, title, result)
  })
}

run()
