import klawSync from 'klaw-sync'

const directoryScanner = async (mainDirectory) => {
  const rootDir = process.cwd()
  const files = await klawSync(`${rootDir}/${mainDirectory}`, {
    nodir: true,
  })
  return files.map(item => item.path.replace(`${rootDir}/${mainDirectory}/`, ''))
}

export default directoryScanner
