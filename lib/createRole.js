const roleToSql = require('./helpers/roleToSql')

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

module.exports = createRole
