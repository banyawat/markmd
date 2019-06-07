import fs from 'fs-extra'
import log from './utils/log'
import { ERROR_MESSAGE } from './constant'

const copyImageFolder = async (sourceFolder, destinationFolder) => {
  try {
    if (await fs.existsSync(sourceFolder)) {
      await fs.copySync(sourceFolder, `./${destinationFolder}/${sourceFolder}`)
      log.compile('Copying images...')
    } else {
      log.warn(ERROR_MESSAGE.IMAGE_FOLDER_NOT_EXIST)
    }
  } catch (error) {
    log.warn(ERROR_MESSAGE.COULD_NOT_COPY_IMAGE)
  }
}

export default copyImageFolder
