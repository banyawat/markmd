import smartFs from 'smart-fs'
import directoryScanner from '../../../src/filer/directoryScanner'

jest.mock('smart-fs', () => ({
  walkDir: () => true,
}))

describe('Test of directoryScanner', () => {
  it('directoryScanner to be used correct', async () => {
    const result = await directoryScanner()
    expect(result).toBe(true)
  })
})
