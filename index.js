#!/usr/bin/env node

import '@babel/polyfill' // eslint-disable-line
import pageMapTraverser from './src/libs/pageMapTraverser'
import initialSettings from './src/libs/initialSettings'
import mdFileReader from './src/libs/mdFileReader'
import indexer from './src/indexer'
import mdParser from './src/libs/mdParser'
import filer from './src/libs/filer'
import copyImageFolder from './src/copyImageFolder'
import genFile from './src/genFile'
import copyStyles from './src/copyStyles'
import { NAME } from './src/constant'

const run = async () => {
  const rootDir = process.cwd()
  const settings = await initialSettings()
  const pageList = await filer(settings.source)
  console.log(pageList)
  console.info('\nStart read doc\n')

  let mdDocument
  let body
  let data

  pageMapTraverser(pageList, async (title, path, deepLevel) => {
    mdDocument = await mdFileReader(`${rootDir}/${path}`)
    body = mdParser(mdDocument)
    data = {
      path,
      title,
      body,
      indexNode: indexer(pageList, path),
    }
    await genFile(data, settings, deepLevel)
  })
  const path = `/${NAME.DEFAULT_SOURCE_PATH}/README.md`
  mdDocument = await mdFileReader(`${rootDir}/README.md`)
  body = mdParser(mdDocument)
  data = {
    path,
    title: process.env.npm_package_name,
    body,
    indexNode: indexer(pageList, ''),
  }
  await genFile(data, settings, -1, true)
  await copyImageFolder(settings.image, settings.destination)
  await copyStyles(settings.destination)
}

run()
