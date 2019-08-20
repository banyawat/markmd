#!/usr/bin/env node

import '@babel/polyfill' // eslint-disable-line
import createAPIDocConfig from './src/createAPIDocConfig'
import generateDocument, { Indexer } from './src/html'
import getSettings, { validate } from './src/settings'
import pageMapTraverser from './src/pageMapTraverser'
import copyImageFolder from './src/copyImageFolder'
import copyStyleSheet from './src/copyStyleSheet'
import watch from './src/optionCommand/watch'
import readMDFile from './src/readMDFile'
import parseMD from './src/parseMD'
import log from './src/utils/log'
import filer from './src/filer'

const main = async (settings) => {
  log.title('\n<<  MarkMD  >>\n')
  await validate(settings)
  const rootDir = process.cwd()
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
      indexNode: (settings.version)
        ? Indexer.version(pageList, path, deepLevel)
        : Indexer.normal(pageList, path, deepLevel),
    }
    await generateDocument(data, settings, deepLevel)
  })
  const path = `/${settings.source}/README.md`
  mdDocument = await readMDFile(`${rootDir}/README.md`)
  data = {
    path,
    title: process.env.npm_package_name,
    body: parseMD(mdDocument),
    indexNode: (settings.version)
      ? Indexer.version(pageList, '/', -1)
      : Indexer.normal(pageList, '/', -1),
  }
  await generateDocument(data, settings, -1, true)
  await copyStyleSheet(settings.destination)
  await copyImageFolder(settings.image, settings.destination)
  await createAPIDocConfig(settings)
  console.info()
  log.info(`Finished. See you at ${rootDir}/${settings.destination}/index.html\n`)
}

const run = async () => {
  const isWatch = process.argv.includes('--watch') || process.argv.includes('-w')
  if (!isWatch) {
    const settings = await getSettings()
    await main(settings)
    process.exit()
  } else {
    const settings = await getSettings()
    watch(settings)
  }
}

run()
