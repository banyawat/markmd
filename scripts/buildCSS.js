import LessPluginCleanCSS from 'less-plugin-clean-css'
import fs from 'fs-extra'
import path from 'path'
import less from 'less'
import {
  PATH,
  ERROR_MESSAGE,
} from '../src/constant'
import log from '../src/utils/log'

const cleanCSSPlugin = new LessPluginCleanCSS({ advanced: true })

const copyStyleSheet = async () => {
  const rootDir = process.cwd()
  const dir = __dirname
  const sourcePath = `${dir}/${PATH.STYLES}`
  const destinationPath = `${rootDir}/build/src/styles/${PATH.STYLES}`
  try {
    const compiledLessSheet = await less.render(
      fs.readFileSync(`${sourcePath}/index.less`).toString(),
      {
        plugins: [cleanCSSPlugin],
        relativeUrls: true,
        filename: path.resolve(`${sourcePath}/index.less`),
      },
    )
    await fs.ensureDirSync(`${destinationPath}`)
    await fs.copyFileSync(`${sourcePath}/prism.js`, `${destinationPath}/prism.js`)
    await fs.writeFileSync(`${destinationPath}/index.css`, compiledLessSheet.css)
    log.compile('Generating Themes...')
  } catch (error) {
    log.error(ERROR_MESSAGE.CSS_COPY_ERROR, error)
  }
}

copyStyleSheet()
