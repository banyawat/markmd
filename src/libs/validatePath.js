import fs from 'fs'
import { ERROR_MESSAGE, NAME } from '../constant'

const validatePath = (setting) => {
  const rootDir = process.cwd()
  if (fs.existsSync(`${rootDir}/${NAME.DEFAULT_SETTING_FILE}`)) {
    console.info('Found configuration.\n')
  }
  if (setting.target && !fs.existsSync(`${rootDir}/${setting.target}`)) {
    console.error(ERROR_MESSAGE.TARGET_FOLDER_NOT_EXIST)
  } else if (!fs.existsSync(`${rootDir}/${NAME.DEFAULT_PATH}`)) {
    console.error(ERROR_MESSAGE.DEFAULT_FOLDER_NOT_EXIST)
    return false
  }
  return true
}

export default validatePath
