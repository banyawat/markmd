import smartFs from 'smart-fs'
import { NAME } from '../../constant'

const directoryScanner = async (mainDirectory = NAME.DEFAULT_PATH) => {
  console.info('Scanning directory')
  const rootDir = process.cwd()
  const files = await smartFs.walkDir(`${rootDir}/${mainDirectory}`)
  return files
}

export default directoryScanner
