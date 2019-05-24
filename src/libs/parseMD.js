import Showdown from 'showdown'

const converter = new Showdown.Converter({
  optionKey: 'value',
  tables: true,
  emoji: true,
})

const parseMD = (document) => {
  const result = converter.makeHtml(document)
  return result
}

export default parseMD