const createDatabase = require('./lib/createDatabase')
const createRole = require('./lib/createRole')
const createUser = require('./lib/createUser')
const dropDatabase = require('./lib/dropDatabase')
const dropRole = require('./lib/dropRole')
const dropUser = require('./lib/dropUser')
const grant = require('./lib/grant')
const revoke = require('./lib/revoke')

module.exports = {
  createDatabase,
  createRole,
  createUser,
  dropDatabase,
  dropRole,
  dropUser,
  grant,
  revoke,
}
