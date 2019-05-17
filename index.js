import pageMapTraverser from './src/libs/pageMapTraverser'
import initialSettings from './src/libs/initialSettings'
import mdFileReader from './src/libs/mdFileReader'
import indexer from './src/indexer'
import mdParser from './src/libs/mdParser'
import filer from './src/libs/filer'
import copyImageFolder from './src/copyImageFolder'
import genFile from './src/genFile'

const run = async () => {
  const rootDir = process.cwd()
  const settings = await initialSettings()
  const pageList = await filer(settings.source)
  console.log(pageList)
  console.info('\nStart read doc\n')

  pageMapTraverser(pageList, async (title, path) => {
    console.log('Path', path)
    const indexString = indexer(pageList, path)
    // console.log('PUT INDEX IN HTML TO SEE! ->\n', indexString, '\n')
    const mdDocument = await mdFileReader(`${rootDir}/${path}`)
    const dataInDoc = mdParser(mdDocument)
    const data = {
      path,
      title,
      dataInDoc,
      indexString,
    }
    await genFile(data, settings)
  })

  await copyImageFolder(settings.image, settings.destination)
}

run()
