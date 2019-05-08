const flattenDeep = arr1 => arr1.reduce(
  (acc, val) => (Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)), [],
)

export default flattenDeep
