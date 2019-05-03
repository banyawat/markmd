import smartFs from 'smart-fs'

const directoryScanner = async () => {
  console.info('Scanning directory')
  const rootDir = process.cwd()
  const files = await smartFs.walkDir(`${rootDir}/docs`)
  return files
}

export default directoryScanner
