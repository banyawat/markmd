import directoryScanner from './directoryScanner'
import fileMapper from './fileMapper'
import getExtension from './getExtension'

const filer = async (mainDirectory = 'docs') => {
  let files = await directoryScanner(mainDirectory)
  files = files.filter(file => (getExtension(file) === 'md'))
  const map = fileMapper(files, mainDirectory)
  return map
}

export default filer
