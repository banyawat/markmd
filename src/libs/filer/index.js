import directoryScanner from './directoryScanner'
import mdReader from './mdReader'

const filer = async () => {
  const rootDir = process.cwd()
  const files = await directoryScanner()
  console.info('\nStart read document')
  let result = await Promise.all(files.map(path => mdReader(`${rootDir}/docs/${path}`)))
  result = result.filter(item => item)
  return result
}

export default filer
