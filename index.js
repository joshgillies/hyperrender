const hyperHTML = require('viperhtml')

function createWire (obj, type) {
  var self = this
  return function wire () {
    return hyperHTML.wire(obj || self, type).apply(hyperHTML, arguments)
  }
}

function html (obj) {
  return (arguments.length > 1 || (obj && obj.raw))
    ? hyperHTML.wire(this).apply(hyperHTML, arguments)
    : createWire.call(this, obj)
}

function svg (obj) {
  return (arguments.length > 1 || (obj && obj.raw))
    ? hyperHTML.wire(this, 'svg').apply(hyperHTML, arguments)
    : createWire.call(this, obj, 'svg')
}

module.exports = function render () {
  return html.apply(this, arguments)
}
module.exports.html = html
module.exports.svg = svg
