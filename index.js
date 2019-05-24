import pageMapTraverser from './src/libs/pageMapTraverser'
import initialSettings from './src/libs/initialSettings'
import mdFileReader from './src/libs/mdFileReader'
import indexer from './src/indexer'
import mdParser from './src/libs/mdParser'
import filer from './src/libs/filer'
import copyImageFolder from './src/copyImageFolder'
import genFile from './src/genFile'
import copyStyles from './src/copyStyles'
import { NAME } from './src/constant'

const run = async () => {
  const rootDir = process.cwd()
  const settings = await initialSettings()
  const pageList = await filer(settings.source)
  console.log(pageList)
  console.info('\nStart read doc\n')
  let indexString
  let mdDocument
  let dataInDoc
  let data
  pageMapTraverser(pageList, async (title, path) => {
    indexString = indexer(pageList, path)
    mdDocument = await mdFileReader(`${rootDir}/${path}`)
    dataInDoc = mdParser(mdDocument)
    data = {
      path,
      title,
      dataInDoc,
      indexString,
    }
    await genFile(data, settings)
  })
  mdDocument = await mdFileReader(`${rootDir}/README.md`)
  dataInDoc = mdParser(mdDocument)
  data = {
    path: `/${NAME.DEFAULT_SOURCE_PATH}/README.md`,
    title: process.env.npm_package_name,
    dataInDoc,
    indexString,
  }
  await genFile(data, settings, true)
  await copyImageFolder(settings.image, settings.destination)
  await copyStyles(settings.destination)
}

run()
