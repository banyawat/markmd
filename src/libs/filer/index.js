import directoryScanner from './directoryScanner'
import fileMapper from './fileMapper'
import mdFileReader from './mdFileReader'
import getExtension from './getExtension'

const filer = async () => {
  const rootDir = process.cwd()
  let files = await directoryScanner()
  files = files.filter(file => (getExtension(file) === 'md'))
  const map = fileMapper(files)
  console.log(JSON.stringify(map))
  let docs = await Promise.all(files.map(path => mdFileReader(`${rootDir}/docs/${path}`)))
  docs = docs.filter(item => item.document)
  return {
    docs,
    map,
  }
}

export default filer
