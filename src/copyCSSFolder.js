import fs from 'fs-extra'
import { PATH, ERROR_MESSAGE } from './constant'
import log from './utils/log'

const copyCSSFolder = async (destinationFolder) => {
  const rootDir = process.cwd()
  const dir = __dirname
  try {
    await fs.copySync(`${dir}/${PATH.STYLES}`, `${rootDir}/${destinationFolder}/${PATH.STYLES}`)
    log.compile('Generating Themes')
  } catch (error) {
    log.error(ERROR_MESSAGE.CSS_COPY_ERROR)
  }
}

export default copyCSSFolder
