#!/usr/bin/env node

import '@babel/polyfill' // eslint-disable-line
import getInitialSettings from './src/getInitialSettings'
import pageMapTraverser from './src/pageMapTraverser'
import generateHTMLFile from './src/generateHTMLFile'
import copyImageFolder from './src/copyImageFolder'
import generateIndex from './src/generateIndex'
import copyCSSFolder from './src/copyCSSFolder'
import readMDFile from './src/readMDFile'
import parseMD from './src/libs/parseMD'
import { NAME } from './src/constant'
import filer from './src/filer'

const run = async () => {
  const rootDir = process.cwd()
  const settings = await getInitialSettings()
  const pageList = await filer(settings.source)
  let mdDocument
  let data

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
  const path = `/${NAME.DEFAULT_SOURCE_PATH}/README.md`
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
}

run()
