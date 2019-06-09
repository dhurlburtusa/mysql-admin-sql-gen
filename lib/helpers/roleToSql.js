const accountNameToSql = require('./accountNameToSql')
const normalizeRole = require('./normalizeRole')

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

module.exports = roleToSql
