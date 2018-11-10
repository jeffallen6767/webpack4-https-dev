export default function bar(unsafe) {
  const
    foo = [1, 2, 3],
    baz = foo.reduce((acc, item, index) => {
      const
        html = '<h2>index ' + index + ' item ' + item + '</h2>'
      console.log('index', index, 'item', item, '=', html)
      acc += html
      return acc
    }, unsafe)
  console.log('baz', baz)
  document.getElementById('app').innerHTML = baz
}
