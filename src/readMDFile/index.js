import fs from 'fs-extra'
import convertLinkMDToHTML from './convertLinkMDToHTML'

const readMDFile = async (path) => {
  const document = await fs.readFileSync(path)
  const replacedLinkDocument = convertLinkMDToHTML(document.toString())
  return replacedLinkDocument
}

export default readMDFile
