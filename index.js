import pageMapTraverser from './src/libs/pageMapTraverser'
import initialSettings from './src/libs/initialSettings'
import mdFileReader from './src/libs/mdFileReader'
import indexer from './src/indexer'
import mdParser from './src/libs/mdParser'
import filer from './src/libs/filer'
import folderMaker from './src/folderMaker'
import genFile from './src/libs/genFile'

const run = async () => {
  const rootDir = process.cwd()
  const settings = await initialSettings()
  const pageList = await filer(settings.source)
  console.info('\nStart read doc\n')
  const indexString = indexer(pageList, settings)
  console.log('PUT INDEX IN HTML TO SEE! ->\n', indexString, '\n')
  await folderMaker(pageList)

  pageMapTraverser(pageList, async (title, path) => {
    const mdDocument = await mdFileReader(`${rootDir}/${path}`)
    const result = mdParser(mdDocument)
    await genFile(path, title, result, settings)
  })
}

run()
