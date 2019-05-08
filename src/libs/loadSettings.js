import fs from 'fs'
import { NAME } from '../constant'

const loadSettings = async () => {
  const rootDir = process.cwd()
  try {
    const raw = await fs.readFileSync(`${rootDir}/${NAME.DEFAULT_SETTING_FILE}`)
    const settings = JSON.parse(raw)
    return settings
  } catch (error) {
    return {}
  }
}

export default loadSettings
