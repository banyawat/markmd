import { NAME } from '../constant'

const fill = async (settings) => {
  const finalSettings = { ...settings }
  if (!settings.source) {
    finalSettings.source = NAME.DEFAULT_SOURCE_PATH
  }
  if (!settings.destination) {
    finalSettings.destination = NAME.DEFAULT_EXPORT_PATH
  }

  if (!settings.image) {
    finalSettings.image = NAME.DEFAULT_IMAGE_PATH
  }

  if (!settings.version) {
    finalSettings.version = false
  }

  return finalSettings
}

export default fill
