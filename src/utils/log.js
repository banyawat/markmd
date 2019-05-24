import chalk from 'chalk'

const log = {
  title: (...arg) => {
    console.info(chalk.magenta(...arg))
  },
  compile: (...arg) => {
    console.info(chalk.green('COMPILING>'), ...arg)
  },
  info: (...arg) => {
    console.info(chalk.bgBlue('   INFO   '), chalk.blue(...arg))
  },
  warn: (...arg) => {
    console.error(chalk.bgYellow(' WARNNING '), chalk.yellow(...arg))
  },
  error: (...arg) => {
    console.error(chalk.bgRed(' ERROR '), chalk.red(...arg))
  },
}

export default log
