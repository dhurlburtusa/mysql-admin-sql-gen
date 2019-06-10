import quoteIdentifier from './quoteIdentifier'

function starOrEscape (identifier) {
  let sql

  if (identifier === '*') {
    sql = '*'
  }
  else {
    sql = quoteIdentifier(identifier)
  }

  return sql
}

function objectLevelToSql (level) {
  let sql

  if (typeof level === 'string') {
    sql = starOrEscape(level)
  }
  else {
    const { database, routine, table } = level

    if (routine && database) {
      sql = `${quoteIdentifier(database)}.${quoteIdentifier(routine)}`
    }
    else if (table && database) {
      sql = `${starOrEscape(database)}.${starOrEscape(table)}`
    }
    else if (database) {
      sql = `${starOrEscape(database)}.*`
    }
    else if (table) {
      sql = `${starOrEscape(table)}`
    }
    else {
      throw TypeError('An invalid level given. See code for more details. Sorry about that.')
    }
  }

  return sql
}

export default objectLevelToSql
