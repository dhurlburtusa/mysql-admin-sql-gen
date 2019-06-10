import objectToSql from './helpers/objectToSql'
import privilegeToSql from './helpers/privilegeToSql'
import roleToSql from './helpers/roleToSql'

// https://dev.mysql.com/doc/refman/8.0/en/grant.html
function grant (options) {
  let sql
  let { on, privileges, proxy, roles, to, withAdmin, withGrant } = options

  if (!Array.isArray(to)) {
    to = [to]
  }
  if (on && proxy) {
    let roleOrUser = on
    sql = [
      'GRANT PROXY ON',
      roleToSql(roleOrUser),
      'TO',
      to.map(roleToSql).join(', '),
      withGrant ? 'WITH GRANT OPTION' : null,
    ]
      .filter(Boolean)
      .join(' ') + ';'
  }
  else if (on && privileges) {
    if (!Array.isArray(privileges)) {
      privileges = [privileges]
    }
    const object = on
    sql = [
      'GRANT',
      privileges.map(privilegeToSql).join(', '),
      'ON',
      objectToSql(object),
      'TO',
      to.map(roleToSql).join(', '),
      withGrant ? 'WITH GRANT OPTION' : null,
    ]
      .filter(Boolean)
      .join(' ') + ';'
  }
  else if (roles) {
    if (!Array.isArray(roles)) {
      roles = [roles]
    }
    sql = [
      'GRANT',
      roles.map(roleToSql).join(', '),
      'TO',
      to.map(roleToSql).join(', '),
      withAdmin ? 'WITH ADMIN OPTION' : null,
    ]
      .filter(Boolean)
      .join(' ') + ';'
  }
  else {
    throw TypeError('An invalid set of options given. See code for more details. Sorry about that.')
  }
  return sql
}

export default grant
