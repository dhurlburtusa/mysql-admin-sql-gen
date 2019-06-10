import accountNameToSql from './helpers/accountNameToSql'
import normalizeUser from './helpers/normalizeUser'

function dropUser (users, options = {}) {
  const { ifExists } = options
  if (!Array.isArray(users)) {
    users = [users]
  }
  const sql = [
    'DROP USER',
    ifExists ? 'IF EXISTS' : null,
    users.map(user => {
      user = normalizeUser(user)
      const accountName = {
        user: user.name,
        host: user.host,
      }
      return accountNameToSql(accountName)
    }).join(', '),
  ].filter(Boolean).join(' ') + ';'
  return sql

}

export default dropUser
