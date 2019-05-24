import fs from 'fs-extra'
import { PATH } from './constant'

const copyStyles = async (destinationFolder) => {
  const rootDir = process.cwd()
  const dir = __dirname
  await fs.copySync(`${dir}/${PATH.STYLES}`, `${rootDir}/${destinationFolder}/${PATH.STYLES}`)
  console.log('> CSS copy has been completed')
}

export default copyStyles
