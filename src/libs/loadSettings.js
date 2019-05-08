import fs from 'fs'
import { ERROR_MESSAGE } from '../constant'

const settingCalibrator = async (settings) => {
  const { target } = settings
  const finalSettings = settings
  if (target) {
    if (!fs.existsSync(target)) {
      console.warn(ERROR_MESSAGE.TARGET_FOLDER_NOT_EXIST)
      finalSettings.target = 'docs'
    }
  }
  return finalSettings
}

const loadSettings = async () => {
  const rootDir = process.cwd()
  const raw = await fs.readFileSync(`${rootDir}/markmd.json`)
  const settings = JSON.parse(raw)
  return settingCalibrator(settings)
}

export default loadSettings
