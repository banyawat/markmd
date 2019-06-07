import fs from 'fs'
import validate from './validate'
import { NAME } from '../constant'
import fill from './fill'

const rootDir = process.cwd()

const loadSettings = async () => {
  let settings = {}
  try {
    const raw = await fs.readFileSync(`${rootDir}/${NAME.DEFAULT_SETTING_FILE}`)
    settings = JSON.parse(raw)
    return fill(settings)
  } catch (error) {
    return fill(settings)
  }
}

export default loadSettings

export {
  fill,
  validate,
}
