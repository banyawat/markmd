import pageMapTraverser from './src/libs/pageMapTraverser'
import mdFileReader from './src/libs/mdFileReader'
import mdParser from './src/libs/mdParser'
import genFile from './src/libs/genFile'
import filer from './src/libs/filer'
import loadSettings from './src/libs/loadSettings'

const run = async () => {
  const rootDir = process.cwd()
  const setting = await loadSettings()
  console.info('Greedy')
  const pageList = await filer(setting.target)
  console.log(pageList)
  console.info('\nStart read doc\n')
  pageMapTraverser(pageList, async (title, path) => {
    console.log(title, path)
    const mdDocument = await mdFileReader(`${rootDir}/${path}`)
    console.info('\n------------------------------------------------------')
    console.info(`<O> PATH = ${path}`)
    console.info('------------------------------------------------------')
    const result = mdParser(mdDocument)
    console.info(result)
    console.info('\n')
    genFile(path, title, result)
  })
}

run()
