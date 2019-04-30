import smartFs from 'smart-fs'

const fileReader = async () => {
  const rootDir = process.cwd()
  const files = await smartFs.walkDir(`${rootDir}/docs`)
  console.log(files)
}

export default fileReader
