import fs from 'fs'
import { ERROR_MESSAGE, NAME } from './constant'
import log from './utils/log'

const rootDir = process.cwd()

const validateSettings = async (settings) => {
  if (!(await fs.existsSync(`${rootDir}/${settings.source}`))) {
    log.error(ERROR_MESSAGE.SOURCE_FOLDER_NOT_EXIST)
    process.exit(new Error(ERROR_MESSAGE.SOURCE_FOLDER_NOT_EXIST))
  }
  if (await fs.existsSync(`${rootDir}/${settings.destination}`)) {
    log.warn(ERROR_MESSAGE.DESTINATION_EXIST)
  }
  if (!(await fs.existsSync(`${rootDir}/${settings.image}`))) {
    log.warn(ERROR_MESSAGE.IMAGE_FOLDER_NOT_EXIST)
  }
}

const fillSettings = (settings) => {
  const finalSettings = { ...settings }
  if (!settings.source) {
    finalSettings.source = NAME.DEFAULT_SOURCE_PATH
  }
  if (!settings.destination) {
    finalSettings.destination = NAME.DEFAULT_EXPORT_PATH
  }

  if (!settings.image) {
    finalSettings.image = NAME.DEFAULT_IMAGE_PATH
  }

  validateSettings(finalSettings)

  return finalSettings
}

const loadSettings = async () => {
  let settings = {}
  if (fs.existsSync(`${rootDir}/${NAME.DEFAULT_SETTING_FILE}`)) {
    log.info('Found configuration - markmd.json')
  }
  try {
    const raw = await fs.readFileSync(`${rootDir}/${NAME.DEFAULT_SETTING_FILE}`)
    settings = JSON.parse(raw)
    return fillSettings(settings)
  } catch (error) {
    return fillSettings(settings)
  }
}

export default loadSettings
