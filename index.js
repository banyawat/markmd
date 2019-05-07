import filer from './src/libs/filer'
import mdFileReader from './src/libs/mdFileReader'
import mdParser from './src/libs/mdParser'
import pageMapTraverser from './src/libs/pageMapTraverser'

const run = async () => {
  const rootDir = process.cwd()
  console.info('Greedy')
  const pageList = await filer()
  console.log(pageList)
  console.info('\nStart read doc\n')
  pageMapTraverser(pageList, async (title, path) => {
    console.log(title, path)
    const mdDocument = await mdFileReader(`${rootDir}/${path}`)
    const result = mdParser(mdDocument)
    console.log(result)
  })
}

run()
