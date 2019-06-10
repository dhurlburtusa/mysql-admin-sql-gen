import quoteIdentifier from './helpers/quoteIdentifier'

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
