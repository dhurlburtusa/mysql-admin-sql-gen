/* eslint-env jest */

const createUser = require('../../../lib/createUser')

describe('createUser.js', () => {

  describe('default export', () => {

    it('should return expected SQL', () => {
      let roles
      let sql

      sql = createUser('') // Anonymous user
      expect(sql).toBe("CREATE USER '';")

      sql = createUser('admin')
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser('admin', { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin';")

      sql = createUser('admin', { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser({}) // Anonymous user
      expect(sql).toBe("CREATE USER '';")

      sql = createUser({ name: 'admin' })
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser({ name: 'admin' }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin';")

      sql = createUser({ name: 'admin' }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser({ name: 'admin', identified: { as: 'asdf1234' } })
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser({ name: 'admin', identified: { by: 'asdf1234' } })
      expect(sql).toBe("CREATE USER 'admin' IDENTIFIED BY 'asdf1234';")

      sql = createUser({ name: 'admin', identified: { plugin: 'mysql_native_password' } })
      expect(sql).toBe("CREATE USER 'admin' IDENTIFIED WITH mysql_native_password;")

      sql = createUser({ name: 'admin', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } })
      expect(sql).toBe("CREATE USER 'admin' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = createUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } })
      expect(sql).toBe("CREATE USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = createUser({ name: 'admin', identified: { as: 'asdf1234' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser({ name: 'admin', identified: { by: 'asdf1234' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin' IDENTIFIED BY 'asdf1234';")

      sql = createUser({ name: 'admin', identified: { plugin: 'mysql_native_password' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin' IDENTIFIED WITH mysql_native_password;")

      sql = createUser({ name: 'admin', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = createUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = createUser({ name: 'admin', identified: { as: 'asdf1234' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin';")

      sql = createUser({ name: 'admin', identified: { by: 'asdf1234' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin' IDENTIFIED BY 'asdf1234';")

      sql = createUser({ name: 'admin', identified: { plugin: 'mysql_native_password' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin' IDENTIFIED WITH mysql_native_password;")

      sql = createUser({ name: 'admin', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = createUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = createUser({ name: 'admin', host: 'localhost' })
      expect(sql).toBe("CREATE USER 'admin'@'localhost';")

      sql = createUser({ name: 'admin', host: 'localhost' }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin'@'localhost';")

      sql = createUser({ name: 'admin', host: 'localhost' }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin'@'localhost';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234' } })
      expect(sql).toBe("CREATE USER 'admin'@'localhost';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234' } })
      expect(sql).toBe("CREATE USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { plugin: 'mysql_native_password' } })
      expect(sql).toBe("CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password;")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } })
      expect(sql).toBe("CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } })
      expect(sql).toBe("CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin'@'localhost';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { plugin: 'mysql_native_password' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password;")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }, { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin'@'localhost';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin'@'localhost' IDENTIFIED BY 'asdf1234';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { plugin: 'mysql_native_password' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin'@'localhost' IDENTIFIED WITH mysql_native_password;")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin'@'localhost' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = createUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }, { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = createUser(['admin'])
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser(['admin'], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin';")

      sql = createUser(['admin'], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser([{ name: 'admin' }])
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser([{ name: 'admin' }], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin';")

      sql = createUser([{ name: 'admin' }], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin';")

      sql = createUser([{ name: 'admin', host: 'localhost' }])
      expect(sql).toBe("CREATE USER 'admin'@'localhost';")

      sql = createUser([{ name: 'admin', host: 'localhost' }], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin'@'localhost';")

      sql = createUser([{ name: 'admin', host: 'localhost' }], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin'@'localhost';")

      sql = createUser(['admin', 'other'])
      expect(sql).toBe("CREATE USER 'admin', 'other';")

      sql = createUser(['admin', 'other'], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin', 'other';")

      sql = createUser(['admin', 'other'], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin', 'other';")

      sql = createUser(['admin', { name: 'other' }])
      expect(sql).toBe("CREATE USER 'admin', 'other';")

      sql = createUser(['admin', { name: 'other' }], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin', 'other';")

      sql = createUser(['admin', { name: 'other' }], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin', 'other';")

      sql = createUser(['admin', { name: 'other', identified: { as: 'asdf1234' } }])
      expect(sql).toBe("CREATE USER 'admin', 'other';")

      sql = createUser(['admin', { name: 'other', identified: { by: 'asdf1234' } }])
      expect(sql).toBe("CREATE USER 'admin', 'other' IDENTIFIED BY 'asdf1234';")

      sql = createUser(['admin', { name: 'other', identified: { plugin: 'mysql_native_password' } }])
      expect(sql).toBe("CREATE USER 'admin', 'other' IDENTIFIED WITH mysql_native_password;")

      sql = createUser(['admin', { name: 'other', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }])
      expect(sql).toBe("CREATE USER 'admin', 'other' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = createUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }])
      expect(sql).toBe("CREATE USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = createUser(['admin', { name: 'other', identified: { as: 'asdf1234' } }], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin', 'other';")

      sql = createUser(['admin', { name: 'other', identified: { by: 'asdf1234' } }], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin', 'other' IDENTIFIED BY 'asdf1234';")

      sql = createUser(['admin', { name: 'other', identified: { plugin: 'mysql_native_password' } }], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin', 'other' IDENTIFIED WITH mysql_native_password;")

      sql = createUser(['admin', { name: 'other', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin', 'other' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = createUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = createUser(['admin', { name: 'other', identified: { as: 'asdf1234' } }], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin', 'other';")

      sql = createUser(['admin', { name: 'other', identified: { by: 'asdf1234' } }], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin', 'other' IDENTIFIED BY 'asdf1234';")

      sql = createUser(['admin', { name: 'other', identified: { plugin: 'mysql_native_password' } }], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin', 'other' IDENTIFIED WITH mysql_native_password;")

      sql = createUser(['admin', { name: 'other', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin', 'other' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = createUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = createUser(['admin', { name: 'other', host: 'localhost' }])
      expect(sql).toBe("CREATE USER 'admin', 'other'@'localhost';")

      sql = createUser(['admin', { name: 'other', host: 'localhost' }], { ifNotExists: false })
      expect(sql).toBe("CREATE USER 'admin', 'other'@'localhost';")

      sql = createUser(['admin', { name: 'other', host: 'localhost' }], { ifNotExists: true })
      expect(sql).toBe("CREATE USER IF NOT EXISTS 'admin', 'other'@'localhost';")

      roles = 'admin'
      sql = createUser('admin', { roles })
      expect(sql).toBe("CREATE USER 'admin' DEFAULT ROLE 'admin';")

      roles = { name: 'admin', host: 'localhost' }
      sql = createUser('admin', { roles })
      expect(sql).toBe("CREATE USER 'admin' DEFAULT ROLE 'admin'@'localhost';")

      roles = ['admin']
      sql = createUser('admin', { roles })
      expect(sql).toBe("CREATE USER 'admin' DEFAULT ROLE 'admin';")

      roles = [{ name: 'admin', host: 'localhost' }]
      sql = createUser('admin', { roles })
      expect(sql).toBe("CREATE USER 'admin' DEFAULT ROLE 'admin'@'localhost';")

      roles = ['admin', 'other']
      sql = createUser('admin', { roles })
      expect(sql).toBe("CREATE USER 'admin' DEFAULT ROLE 'admin', 'other';")

      roles = ['admin', { name: 'other' }]
      sql = createUser('admin', { roles })
      expect(sql).toBe("CREATE USER 'admin' DEFAULT ROLE 'admin', 'other';")

      roles = ['admin', { name: 'other', host: 'localhost' }]
      sql = createUser('admin', { roles })
      expect(sql).toBe("CREATE USER 'admin' DEFAULT ROLE 'admin', 'other'@'localhost';")
    })

  })

})
