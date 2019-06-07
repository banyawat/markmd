const getDocumentRoot = (deepLevel) => {
  let documentRoot = ''
  if (deepLevel !== -1) {
    for (let i = 0; i < deepLevel + 1; i += 1) {
      documentRoot += '../'
    }
  }
  return documentRoot
}

export default getDocumentRoot
