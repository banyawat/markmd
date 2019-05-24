#!/usr/bin/env node

import '@babel/polyfill' // eslint-disable-line
import getInitialSettings from './src/getInitialSettings'
import pageMapTraverser from './src/pageMapTraverser'
import generateHTMLFile from './src/generateHTMLFile'
import copyImageFolder from './src/copyImageFolder'
import generateIndex from './src/generateIndex'
import copyCSSFolder from './src/copyCSSFolder'
import readMDFile from './src/readMDFile'
import parseMD from './src/parseMD'
import filer from './src/filer'
import log from './src/utils/log'

const run = async () => {
  log.title('\n\n<<  MarkMD  >>\n')

  const rootDir = process.cwd()
  const settings = await getInitialSettings()
  const pageList = await filer(settings.source)
  let mdDocument
  let data
  console.info()
  log.info('Start compiling...')
  pageMapTraverser(pageList, async (title, path, deepLevel) => {
    mdDocument = await readMDFile(`${rootDir}/${path}`)
    data = {
      path,
      title,
      body: parseMD(mdDocument),
      indexNode: generateIndex(pageList, path),
    }
    await generateHTMLFile(data, settings, deepLevel)
  })
  const path = `/${settings.source}/README.md`
  mdDocument = await readMDFile(`${rootDir}/README.md`)
  data = {
    path,
    title: process.env.npm_package_name,
    body: parseMD(mdDocument),
    indexNode: generateIndex(pageList, ''),
  }
  await generateHTMLFile(data, settings, -1, true)
  await copyImageFolder(settings.image, settings.destination)
  await copyCSSFolder(settings.destination)
  log.info(`Finished. See you at ${rootDir}/${settings.destination}/index.html \n`)
}

run()
