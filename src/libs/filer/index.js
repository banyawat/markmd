import directoryScanner from './directoryScanner'
import fileMapper from './fileMapper'
import getExtension from './getExtension'
import { NAME } from '../../constant'

const filer = async (mainDirectory = NAME.DEFAULT_PATH) => {
  let files = await directoryScanner(mainDirectory)
  files = files.filter(file => (getExtension(file) === 'md'))
  const map = fileMapper(files, mainDirectory)
  return map
}

export default filer
