import directoryScanner from './directoryScanner'
import fileMapper from './fileMapper'
import mdFileReader from './mdFileReader'

const filer = async () => {
  const rootDir = process.cwd()
  const files = await directoryScanner()
  const map = fileMapper(files)
  let docs = await Promise.all(files.map(path => mdFileReader(`${rootDir}/docs/${path}`)))
  docs = docs.filter(item => item.document)
  return {
    docs,
    map,
  }
}

export default filer
