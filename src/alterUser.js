import accountNameToSql from './helpers/accountNameToSql'
import identifiedToSql from './helpers/identifiedToSql'
import normalizeUser from './helpers/normalizeUser'
import roleToSql from './helpers/roleToSql'

// https://dev.mysql.com/doc/refman/8.0/en/alter-user.html
function alterUser (users, options = {}) {
  let sql
  let {
    ifExists,
    roles = [],
  } = options

  if (
    typeof users === 'object' &&
    users !== null &&
    typeof users.name === 'string' &&
    users.name.toUpperCase() === 'USER()'
  ) {
    sql = [
      'ALTER USER',
      ifExists === true ? 'IF EXISTS' : null,
      'USER()',
      users.discardOldPassword === true
        ? 'DISCARD OLD PASSWORD'
        : identifiedToSql(users.identified),
    ].filter(Boolean).join(' ') + ';'
  }
  else {
    if (!Array.isArray(users)) {
      users = [users]
    }
    if (!Array.isArray(roles)) {
      roles = [roles]
    }

    if (roles.length > 0) {
      const user = normalizeUser(users[0])
      const accountName = {
        user: user.name,
        host: user.host,
      }
      sql = [
        'ALTER USER',
        ifExists === true ? 'IF EXISTS' : null,
        accountNameToSql(accountName),
        `DEFAULT ROLE ${roles.map(roleToSql).join(', ')}`,
      ].filter(Boolean).join(' ') + ';'
    }
    else {
      sql = [
        'ALTER USER',
        ifExists === true ? 'IF EXISTS' : null,
        users.map(user => {
          user = normalizeUser(user)
          const accountName = {
            user: user.name,
            host: user.host,
          }
          return [
            accountNameToSql(accountName),
            user.discardOldPassword === true
              ? 'DISCARD OLD PASSWORD'
              : identifiedToSql(user.identified),
          ].filter(Boolean).join(' ')
        }).join(', '),
      ].filter(Boolean).join(' ') + ';'
    }
  }

  return sql
}

export default alterUser
