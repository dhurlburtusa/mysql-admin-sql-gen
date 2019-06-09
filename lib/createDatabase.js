const quoteIdentifier = require('./helpers/quoteIdentifier')

// https://dev.mysql.com/doc/refman/8.0/en/create-database.html
function createDatabase (database, options = {}) {
  const {
    charset,
    collation,
    encryption,
    ifNotExists,
  } = options
  const sql = [
    'CREATE DATABASE',
    quoteIdentifier(database),
    ifNotExists === true ? 'IF NOT EXISTS' : null,
    charset ? `DEFAULT CHARACTER SET ${charset}` : null,
    collation ? `DEFAULT COLLATE ${collation}` : null,
    typeof encryption === 'boolean' ? `DEFAULT ENCRYPTION ${encryption ? 'Y' : 'N'}` : null,
  ]
    .filter(Boolean)
    .join(' ') + ';'
  return sql
}

module.exports = createDatabase
