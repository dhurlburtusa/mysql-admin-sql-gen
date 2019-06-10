import roleToSql from './helpers/roleToSql'

// https://dev.mysql.com/doc/refman/8.0/en/create-role.html
function createRole (roles, options = {}) {
  if (!Array.isArray(roles)) {
    roles = [roles]
  }
  const { ifNotExists } = options
  const sql = [
    `CREATE ROLE`,
    ifNotExists === true ? 'IF NOT EXISTS' : null,
    roles.map(roleToSql).join(', '),
  ].filter(Boolean).join(' ') + ';'
  return sql
}

export default createRole
