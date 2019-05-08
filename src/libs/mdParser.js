import Showdown from 'showdown'

const converter = new Showdown.Converter({
  optionKey: 'value',
  tables: true,
  emoji: true,
})

const mdParser = (document) => {
  const result = converter.makeHtml(document)
  return result
}

export default mdParser