import fs from 'fs'
import filer from './src/libs/filer'
import parser from './src/libs/parser'

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
  console.info('Greedy')
  const pageList = await filer()
  console.info('\nStart read doc\n')
  let count = 0
  pageList.docs.forEach((page) => {
    // console.info('\n------------------------------------------------------')
    // console.info(`<O> PATH = ${page.path}`)
    // console.info('------------------------------------------------------')
    const result = parser(page.document)
    genFile(count, result)
    // console.info(result)
    console.info('\n')
    count += 1
  })
}

run()
