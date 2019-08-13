import fs from 'fs'

const createAPIDocConfig = async (settings) => {
  if (settings.fakeApidocConfig) {
    const rootDir = process.cwd()
    const textBuffer = JSON.stringify({
      name: 'markmd',
      version: '1.0.0',
      description: 'Nothing just a fake API document',
      title: 'markmd',
    }, null, 2)
    const path = `${rootDir}/apidoc/apidoc.json`
    await fs.writeFileSync(path, textBuffer)
  }
}

export default createAPIDocConfig
