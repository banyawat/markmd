import smartFs from 'smart-fs'

const directoryScanner = async (mainDirectory) => {
  console.info('Scanning directory')
  const rootDir = process.cwd()
  const files = await smartFs.walkDir(`${rootDir}/${mainDirectory}`)
  return files
}

export default directoryScanner