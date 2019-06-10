import objectToSql from './helpers/objectToSql'
import privilegeToSql from './helpers/privilegeToSql'
import roleToSql from './helpers/roleToSql'

// https://dev.mysql.com/doc/refman/8.0/en/revoke.html
function revoke (options) {
  let sql
  let { from, on, privileges, proxy } = options

  if (!Array.isArray(from)) {
    from = [from]
  }
  if (proxy) {
    let roleOrUser = on
    sql = [
      'REVOKE PROXY ON',
      roleToSql(roleOrUser),
      'FROM',
      from.map(roleToSql).join(', '),
    ].join(' ') + ';'
  }
  else if (privileges) {
    if (!Array.isArray(privileges)) {
      privileges = [privileges]
    }
    const object = on
    sql = [
      'REVOKE',
      privileges.map(privilegeToSql).join(', '),
      object
        ? [
          'ON',
          objectToSql(object),
        ].join(' ')
        : null,
      'FROM',
      from.map(roleToSql).join(', '),
    ]
      .filter(Boolean)
      .join(' ') + ';'
  }
  else {
    let roles = on
    if (!Array.isArray(roles)) {
      roles = [roles]
    }
    sql = [
      'REVOKE',
      roles.map(roleToSql).join(', '),
      'FROM',
      from.map(roleToSql).join(', '),
    ].join(' ') + ';'
  }
  return sql
}

export default revoke
