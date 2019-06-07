import parseMD from '../../src/parseMD'

describe('parseMD test suite', () => {
  it('Tag should be converted to paragraph', () => {
    const result = parseMD('mock document')
    expect(result).toBe('<p>mock document</p>')
  })
})
