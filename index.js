var xString = require('x-is-string')
module.exports = dsplit
function dsplit (/*str*/path, /*str*/delimiter) {
  if (!xString(path)) return []
  if (!xString(delimiter)) delimiter = '/'
  return path.split(delimiter)
}
