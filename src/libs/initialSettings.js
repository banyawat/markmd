import fs from 'fs'
import { ERROR_MESSAGE, NAME } from '../constant'

const rootDir = process.cwd()

const validateSettings = (settings) => {
  if (!fs.existsSync(`${rootDir}/${settings.source}`)) {
    console.error(ERROR_MESSAGE.SOURCE_FOLDER_NOT_EXIST)
    process.exit(0)
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
    console.info('Found configuration.\n')
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
