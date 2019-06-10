import accountNameToSql from './accountNameToSql'
import normalizeRole from './normalizeRole'

function roleToSql (role) {
  let r = normalizeRole(role)
  if (r.name.length === 0) {
    throw TypeError('The `name` part of a role is required.')
  }
  const accountName = {
    user: r.name,
    host: r.host,
  }
  const sql = accountNameToSql(accountName)
  return sql
}

export default roleToSql
