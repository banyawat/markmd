import fs from 'fs'
import { NAME } from '../constant'

const settingCalibrator = async (settings) => {
  const { target } = settings
  const finalSettings = settings
  if (target) {
    if (!fs.existsSync(target)) {
      finalSettings.target = NAME.DEFAULT_PATH
    }
  }
  return finalSettings
}

const loadSettings = async () => {
  const rootDir = process.cwd()
  const raw = await fs.readFileSync(`${rootDir}/${NAME.DEFAULT_SETTING_FILE}`)
  const settings = JSON.parse(raw)
  return settingCalibrator(settings)
}

export default loadSettings
