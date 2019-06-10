import objectLevelToSql from './objectLevelToSql'

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

export default objectToSql
