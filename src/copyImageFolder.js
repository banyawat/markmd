import fs from 'fs-extra'

const copyImageFolder = async (sourceFolder, destinationFolder) => {
  await fs.copySync(sourceFolder, `./${destinationFolder}/${sourceFolder}`)
  console.log('> Image copy has been completed')
}

export default copyImageFolder
