import quoteIdentifier from './helpers/quoteIdentifier'

// https://dev.mysql.com/doc/refman/8.0/en/drop-database.html
function dropDatabase (database, options = {}) {
  const { ifExists } = options
  const sql = [
    'DROP DATABASE',
    ifExists ? 'IF EXISTS' : null,
    quoteIdentifier(database),
  ].filter(Boolean).join(' ') + ';'
  return sql
}

export default dropDatabase
