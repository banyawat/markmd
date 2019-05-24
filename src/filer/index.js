import directoryScanner from './directoryScanner'
import fileMapper from './fileMapper'
import getFileExtension from './getFileExtension'

const filer = async (mainDirectory) => {
  let files = await directoryScanner(mainDirectory)
  files = files.filter(file => (getFileExtension(file) === 'md'))
  const map = fileMapper(files, mainDirectory)
  return map
}

export default filer
