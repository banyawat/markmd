import filer from './src/libs/filer'
import parser from './src/libs/parser'

const run = async () => {
  console.info('Greedy')
  const documents = await filer()
  console.info(documents)

  console.info('\nStart read doc\n');
  documents.forEach(doc => {
    console.log(`\n------------\n`);
    const result = parser(doc)
    console.log(result);
  })
}

run()
