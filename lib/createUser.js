const accountNameToSql = require('./helpers/accountNameToSql')
const identifiedToSql = require('./helpers/identifiedToSql')
const normalizeUser = require('./helpers/normalizeUser')
const roleToSql = require('./helpers/roleToSql')

function createUser (users, options = {}) {
  let {
    ifNotExists,
    roles = [],
  } = options
  if (!Array.isArray(users)) {
    users = [users]
  }
  if (!Array.isArray(roles)) {
    roles = [roles]
  }
  const sql = [
    'CREATE USER',
    ifNotExists === true ? 'IF NOT EXISTS' : null,
    users.map(user => {
      user = normalizeUser(user)
      const accountName = {
        user: user.name,
        host: user.host,
      }
      return [
        accountNameToSql(accountName),
        identifiedToSql(user.identified),
      ].filter(Boolean).join(' ')
    }).join(', '),
    roles && roles.length > 0
      ? `DEFAULT ROLE ${roles.map(roleToSql).join(', ')}`
      : null,
  ].filter(Boolean).join(' ') + ';'
  return sql
}

module.exports = createUser
