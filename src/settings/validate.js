import fs from 'fs'
import { ERROR_MESSAGE } from '../constant'
import log from '../utils/log'

const rootDir = process.cwd()

const validate = async (settings) => {
  if (!(await fs.existsSync(`${rootDir}/${settings.source}`))) {
    log.error(ERROR_MESSAGE.SOURCE_FOLDER_NOT_EXIST)
    process.exit(new Error(ERROR_MESSAGE.SOURCE_FOLDER_NOT_EXIST))
  }
  if (await fs.existsSync(`${rootDir}/${settings.destination}`)) {
    log.warn(ERROR_MESSAGE.DESTINATION_EXIST)
  }
}


export default validate
