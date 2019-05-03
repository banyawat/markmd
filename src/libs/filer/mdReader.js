import smartFs from 'smart-fs'

const mdReader = async (path) => {
  const parsedPage = await smartFs.smartRead(path)
  const document = parsedPage.join('\n')
  return {
    path,
    document,
  }
}

export default mdReader
