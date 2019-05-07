import fs from 'fs'

const settingCalibrator = async (settings) => {
  const { target } = settings
  const finalSettings = settings
  if (target) {
    if (!fs.existsSync(target)) {
      console.warn('Target folder does not exist, change to default path [./docs]')
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
