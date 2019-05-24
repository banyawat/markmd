import fs from 'fs-extra'
import log from './utils/log'
import { ERROR_MESSAGE } from './constant'

const copyImageFolder = async (sourceFolder, destinationFolder) => {
  try {
    await fs.copySync(sourceFolder, `./${destinationFolder}/${sourceFolder}`)
    log.compile(sourceFolder)
  } catch (error) {
    log.warn(ERROR_MESSAGE.COULD_NOT_COPY_IMAGE)
  }
}

export default copyImageFolder
