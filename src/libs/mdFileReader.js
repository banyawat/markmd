import smartFs from 'smart-fs'
import convertLinkMDToHTML from './convertLinkMDToHTML'

const mdFileReader = async (path) => {
  const parsedPage = await smartFs.smartRead(path)
  const document = parsedPage.join('\n')
  const replacedLinkDocument = convertLinkMDToHTML(document)
  return replacedLinkDocument
}

export default mdFileReader
