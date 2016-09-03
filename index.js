var xString = require('x-is-string')
module.exports = dsplit
function dsplit (/*str*/path, /*str*/delimiter) {
  if (!xString(path)) return []
  if (!xString(delimiter)) delimiter = '/'
  path = path.split(delimiter)
  if (path[path.length-1] === '') path.pop()
  return path
}
