import merge from 'merge-deep'

const fileMapper = (paths, mainDirectory = 'docs') => {
  let result = {}
  paths.forEach((path) => {
    const pathItems = path.split('/') || []
    const structure = {}
    pathItems.reduce((accumulator, item, index) => {
      if (index !== pathItems.length - 1) {
        accumulator[item] = {}
      } else {
        accumulator._ = []
        accumulator._.push({
          title: item.split('.').slice(0, -1).join('.'),
          path: `/${mainDirectory}/${path}`,
        })
      }
      return accumulator[item]
    }, structure)
    result = merge(result, structure)
  })
  return result
}

export default fileMapper
