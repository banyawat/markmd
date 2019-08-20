import fs from 'fs-extra'
import less from 'less'
import LessPluginCleanCSS from 'less-plugin-clean-css'
import { PATH, ERROR_MESSAGE } from './constant'
import log from './utils/log'

const cleanCSSPlugin = new LessPluginCleanCSS({ advanced: true })

const copyStyleSheet = async (destinationFolder) => {
  const rootDir = process.cwd()
  const dir = __dirname
  const lessSheet = await fs.readFileSync(`${dir}/${PATH.STYLES}/index.less`)
  const compiledLessSheet = await less.render(lessSheet.toString(), { plugins: [cleanCSSPlugin] })
  try {
    await fs.ensureDirSync(`${rootDir}/${destinationFolder}/${PATH.STYLES}`)
    await fs.writeFileSync(`${rootDir}/${destinationFolder}/${PATH.STYLES}/index.css`, compiledLessSheet.css)
    log.compile('Generating Themes...')
  } catch (error) {
    log.error(ERROR_MESSAGE.CSS_COPY_ERROR)
  }
}

export default copyStyleSheet
