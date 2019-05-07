import fs from 'fs'
import filer from './src/libs/filer'
import mdFileReader from './src/libs/mdFileReader'
import mdParser from './src/libs/mdParser'
import pageMapTraverser from './src/libs/pageMapTraverser'

const genFile = (filename, data) => {
  const fileName = `${filename}.html`
  const text = `<html>${data}</html>`
  const dir = './apidoc'

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  fs.writeFile(`${dir}/${fileName}`, text, (err) => {
    if (err) throw err
    console.log('Saved!')
  })
}

const run = async () => {
  const rootDir = process.cwd()
  console.info('Greedy')
  const pageList = await filer()
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
  })
}

run()
