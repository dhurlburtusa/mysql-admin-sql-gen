import roleToSql from './helpers/roleToSql'

// https://dev.mysql.com/doc/refman/8.0/en/drop-role.html
function dropRole (roles, options = {}) {
  const { ifExists } = options
  if (!Array.isArray(roles)) {
    roles = [roles]
  }
  const sql = [
    'DROP ROLE',
    ifExists ? 'IF EXISTS' : null,
    roles.map(roleToSql).join(', '),
  ].filter(Boolean).join(' ') + ';'
  return sql

}

export default dropRole
