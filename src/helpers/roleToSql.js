import accountNameToSql from './accountNameToSql'
import normalizeRole from './normalizeRole'

function roleToSql (role) {
  if (typeof role === 'string') {
    const roleUc = role.toUpperCase()
    if (roleUc === 'ALL' || roleUc === 'NONE') {
      return roleUc
    }
  }
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
