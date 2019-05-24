import directoryScanner from './directoryScanner'
import getFileExtension from './getFileExtension'
import fileMapper from './fileMapper'

const filer = async (mainDirectory) => {
  let files = await directoryScanner(mainDirectory)
  files = files.filter(file => (getFileExtension(file) === 'md'))
  const map = fileMapper(files, mainDirectory)
  return map
}

export default filer
