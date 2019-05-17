import smartFs from 'smart-fs'

const copysourceFolder = async (sourceFolder, destinationFolder) => {
  const images = await smartFs.walkDir(sourceFolder)
  images.map(async (imagePath) => {
    const image = await smartFs.smartRead(`./${sourceFolder}/${imagePath}`)
    console.info('copying image to', `./${destinationFolder}/${sourceFolder}/${imagePath}`, '\n')
    const writingResult = await smartFs.smartWrite(`./${destinationFolder}/${sourceFolder}/${imagePath}`, image)
    return writingResult
  })
}

export default copysourceFolder
