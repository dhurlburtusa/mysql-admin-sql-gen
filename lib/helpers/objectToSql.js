const objectLevelToSql = require('./objectLevelToSql')

function objectToSql (object) {
  const { level, type } = object

  const sql = [
    type,
    objectLevelToSql(level),
  ]
    .filter(Boolean)
    .join(' ')

  return sql
}

module.exports = objectToSql
