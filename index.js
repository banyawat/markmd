import fs from 'fs'
import filer from './src/libs/filer'
import parser from './src/libs/parser'

const run = async () => {
  console.info('Greedy')
  const pageList = await filer()
  console.info('\nStart read doc\n')
  pageList.forEach((page) => {
    console.info('---------------------------')
    console.info(`<O> PATH = ${page.path}`)
    console.info('---------------------------')
    const result = parser(page.document)
    console.info(result)
    console.info('\n\n\n')
  })
}

run()
