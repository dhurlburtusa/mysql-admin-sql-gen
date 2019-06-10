import accountNameToSql from './helpers/accountNameToSql'
import identifiedToSql from './helpers/identifiedToSql'
import normalizeUser from './helpers/normalizeUser'
import roleToSql from './helpers/roleToSql'

// https://dev.mysql.com/doc/refman/8.0/en/create-user.html
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

export default createUser
