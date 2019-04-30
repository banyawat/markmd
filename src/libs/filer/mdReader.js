import smartFs from 'smart-fs'

const mdReader = async (path) => {
  console.log('---')
  const parsedPage = await smartFs.smartRead(path)
  const document = parsedPage.join('\n')
  return document
}

export default mdReader
