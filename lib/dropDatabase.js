const quoteIdentifier = require('./helpers/quoteIdentifier')

function dropDatabase (database, options = {}) {
  const { ifExists } = options
  const sql = [
    'DROP DATABASE',
    ifExists ? 'IF EXISTS' : null,
    quoteIdentifier(database),
  ].filter(Boolean).join(' ') + ';'
  return sql
}

module.exports = dropDatabase
