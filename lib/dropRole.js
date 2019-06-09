const roleToSql = require('./helpers/roleToSql')

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

module.exports = dropRole
