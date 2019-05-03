import filer from './src/libs/filer'
import parser from './src/libs/parser'

const run = async () => {
  console.info('Greedy')
  const pageList = await filer()
  console.info('\nStart read doc\n')
  console.info('Map: ', pageList.map)
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
