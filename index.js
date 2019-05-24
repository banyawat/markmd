#!/usr/bin/env node

import '@babel/polyfill' // eslint-disable-line
import pageMapTraverser from './src/libs/pageMapTraverser'
import initialSettings from './src/libs/initialSettings'
import readMDFile from './src/libs/readMDFile'
import indexer from './src/indexer'
import parseMD from './src/libs/parseMD'
import filer from './src/filer'
import copyImageFolder from './src/copyImageFolder'
import generateHTMLFile from './src/generateHTMLFile'
import copyCSSFolder from './src/copyCSSFolder'
import { NAME } from './src/constant'

const run = async () => {
  const rootDir = process.cwd()
  const settings = await initialSettings()
  const pageList = await filer(settings.source)
  let mdDocument
  let data

  pageMapTraverser(pageList, async (title, path, deepLevel) => {
    mdDocument = await readMDFile(`${rootDir}/${path}`)
    data = {
      path,
      title,
      body: parseMD(mdDocument),
      indexNode: indexer(pageList, path),
    }
    await generateHTMLFile(data, settings, deepLevel)
  })
  const path = `/${NAME.DEFAULT_SOURCE_PATH}/README.md`
  mdDocument = await readMDFile(`${rootDir}/README.md`)
  data = {
    path,
    title: process.env.npm_package_name,
    body: parseMD(mdDocument),
    indexNode: indexer(pageList, ''),
  }
  await generateHTMLFile(data, settings, -1, true)
  await copyImageFolder(settings.image, settings.destination)
  await copyCSSFolder(settings.destination)
}

run()
