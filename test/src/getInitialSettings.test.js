import fs from 'fs'
import { getConsoleOutput } from '@jest/console'
import log from '../../src/utils/log'
import getInitialSettings from '../../src/getInitialSettings'

jest.mock('fs')
jest.mock('../../src/constant', () => ({
  ERROR_MESSAGE: {
    SOURCE_FOLDER_NOT_EXIST: 'source',
    DESTINATION_EXIST: 'destination',
    IMAGE_FOLDER_NOT_EXIST: 'image',
  },
  NAME: {
    DEFAULT_SETTING_FILE: 'markmd',
    DEFAULT_SOURCE_PATH: 'docs',
    DEFAULT_EXPORT_PATH: 'apidocs',
    DEFAULT_IMAGE_PATH: 'docs-img',
  },
}))
jest.mock('../../src/utils/log.js')

describe('getIntialSettings test suite', () => {
  const rootDir = process.cwd()
  beforeEach(() => {
  })

  it('Exited when source is not exist', async () => {
    process.exit = (error) => {
      expect(error.message).toBe('source')
    }
    fs.existsSync.mockImplementation((path) => {
      if (path === `${rootDir}/docs`) {
        return false
      }
      return true
    })
    await getInitialSettings()
  })

  it('Warn once when destination is not defined', async () => {
    log.warn.mockImplementation((text) => {
      expect(text).toBe('destination')
    })
    fs.existsSync.mockImplementation((path) => {
      if (path === `${rootDir}/apidocs`) {
        return true
      }
      return true
    })
    await getInitialSettings()
  })

  it('Warn once when image folder is not defined', async () => {
    log.warn.mockImplementation((text) => {
      expect(text).toBe('image')
    })
    fs.existsSync.mockImplementation((path) => {
      if (path === `${rootDir}/docs-img`) {
        return false
      }
      if (path === `${rootDir}/apidocs`) {
        return false
      }
      return true
    })
    await getInitialSettings()
  })
})
