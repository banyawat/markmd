import fs from 'fs'
import filer from './src/libs/filer'
import pageMapTraverser from './src/libs/pageMapTraverser'
import parser from './src/libs/parser'

const run = async () => {
  console.info('Greedy')
  const pageList = await filer()
  console.info('\nStart read doc\n')
  pageMapTraverser(pageList.map)
  pageList.docs.forEach((page) => {
    console.info('\n------------------------------------------------------')
    console.info(`<O> PATH = ${page.path}`)
    console.info('------------------------------------------------------')
    const result = parser(page.document)
    console.info(result)
    console.info('\n')
  })
}

run()
