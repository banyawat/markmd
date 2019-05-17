import fs from 'fs-extra'

const copyImageFolder = async (sourceFolder, destinationFolder) => {
  await fs.copySync(sourceFolder, `./${destinationFolder}/${sourceFolder}`)
  console.log('Image copied')
}

export default copyImageFolder
