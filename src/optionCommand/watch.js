import nodemon from 'nodemon'
import log from '../utils/log'

const watchCommand = (settings) => {
  const { source } = settings
  const { filename } = process.mainModule
  nodemon(`nodemon --watch ${source} --exec \"babel-node ${filename}\" -e md`)
    .on('exit', () => {
      log.title(`Waiting for file changes in /${settings.source}...`)
    })
    .on('quit', () => {
      process.exit()
    })
}

export default watchCommand
