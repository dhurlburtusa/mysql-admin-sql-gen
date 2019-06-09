const escapeIdentifier = require('./escapeIdentifier')

function quoteIdentifier (identifier) {
  return `\`${escapeIdentifier(identifier)}\``
}

module.exports = quoteIdentifier
