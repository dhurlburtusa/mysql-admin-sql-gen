const quoteIdentifier = require('./quoteIdentifier')

function privilegeToSql (privilege) {
  let sql

  if (typeof privilege === 'object' && privilege !== null && privilege.type) {
    let { columns, type } = privilege

    if (columns && !Array.isArray(columns)) {
      columns = [columns]
    }
    sql = [
      type,
      Array.isArray(columns) && columns.length > 0
        ? [
          '(',
          columns.map(quoteIdentifier).join(', '),
          ')',
        ].join('')
        : null,
    ]
      .filter(Boolean)
      .join(' ')
  }
  else {
    sql = '' + privilege
  }

  return sql
}

module.exports = privilegeToSql
