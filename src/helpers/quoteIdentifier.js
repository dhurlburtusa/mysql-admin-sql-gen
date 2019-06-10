import escapeIdentifier from './escapeIdentifier'

function quoteIdentifier (identifier) {
  return `\`${escapeIdentifier(identifier)}\``
}

export default quoteIdentifier
