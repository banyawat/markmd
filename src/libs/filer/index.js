import directoryScanner from './directoryScanner'
import fileMapper from './fileMapper'
import getExtension from './getExtension'

const filer = async () => {
  let files = await directoryScanner()
  files = files.filter(file => (getExtension(file) === 'md'))
  const map = fileMapper(files)
  return map
}

export default filer
