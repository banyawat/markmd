import fs from 'fs-extra'
import { PATH } from './constant'

const copyStyles = async (destinationFolder) => {
  await fs.copySync(`./src/${PATH.STYLES}`, `${destinationFolder}/${PATH.STYLES}`)
  console.log('CSS copied')
}

export default copyStyles
