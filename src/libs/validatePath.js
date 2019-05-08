import fs from 'fs'
import { ERROR_MESSAGE } from '../constant'

const validatePath = (setting) => {
  const rootDir = process.cwd()
  if (!fs.existsSync(`${rootDir}/${setting.target}`)) {
    console.error(ERROR_MESSAGE.DEFAULT_FOLDER_NOT_EXIST)
    return false
  }
  return true
}

export default validatePath
