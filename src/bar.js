const
  getAttr = attributes => {
    return Object.keys(attributes).reduce((acc, key) => {
      return `${acc} ${key}="${attributes[key]}"`
    }, '')
  },
  getEl = (type, attributes, contents) => {
    const
      attr = getAttr(attributes),
      open = `<${type}${attr}>`,
      close = `</${type}>`
    return `${open}${contents}${close}`
  }

export default function bar(unsafe/*, style */) {
  const
    foo = [1, 2, 3],
    baz = foo.reduce((acc, item, index) => {
      const
        html = getEl(`h${item}`, {id: `item_${index}`}, `This is item ${item} @ index ${index}`)
      return `${acc} ${html}`
    }, unsafe)
  document.getElementById('app').innerHTML = baz
}
