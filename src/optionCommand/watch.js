import nodemon from 'nodemon'
import log from '../utils/log'

const watchCommand = (settings) => {
  const { source } = settings
  nodemon(`nodemon --watch ${source} --exec \"babel-node index\" -e md`)
    .on('exit', () => {
      log.title(`Waiting for file changes in /${settings.source}...`)
    })
}

export default watchCommand
