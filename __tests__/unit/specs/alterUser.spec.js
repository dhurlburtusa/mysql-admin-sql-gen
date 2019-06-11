/* eslint-env jest */

import alterUser from '../../../src/alterUser'

describe('alterUser.js', () => {

  describe('default export', () => {

    it('should return expected SQL', () => {
      let roles
      let sql

      sql = alterUser('') // Anonymous user
      expect(sql).toBe("ALTER USER '';")

      sql = alterUser('admin')
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser('admin', { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin';")

      sql = alterUser('admin', { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser({}) // Anonymous user
      expect(sql).toBe("ALTER USER '';")

      sql = alterUser({ name: '' }) // Anonymous user
      expect(sql).toBe("ALTER USER '';")

      sql = alterUser({ name: 'admin' })
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser({ name: 'admin' }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin';")

      sql = alterUser({ name: 'admin' }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser({ name: 'admin', discardOldPassword: true })
      expect(sql).toBe("ALTER USER 'admin' DISCARD OLD PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { as: 'asdf1234' } })
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234' } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', replace: 'asdfasdf' } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'USER()', discardOldPassword: true })
      expect(sql).toBe('ALTER USER USER() DISCARD OLD PASSWORD;')

      sql = alterUser({ name: 'USER()', identified: { by: 'asdf1234' } })
      expect(sql).toBe("ALTER USER USER() IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'USER()', identified: { by: 'asdf1234' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS USER() IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'USER()', identified: { by: 'asdf1234' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER USER() IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'user()', identified: { by: 'asdf1234' } })
      expect(sql).toBe("ALTER USER USER() IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'USER()', identified: { by: 'asdf1234', replace: 'asdfasdf' } })
      expect(sql).toBe("ALTER USER USER() IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'USER()', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER USER() IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'USER()', identified: { by: 'asdf1234', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER USER() IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { plugin: 'mysql_native_password' } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password;")

      sql = alterUser({ name: 'admin', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf' } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { as: 'asdf1234' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', replace: 'asdfasdf' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', retainCurrentPassword: true } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { plugin: 'mysql_native_password' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password;")

      sql = alterUser({ name: 'admin', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf', retainCurrentPassword: true } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password', retainCurrentPassword: true } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { as: 'asdf1234' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', replace: 'asdfasdf' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', retainCurrentPassword: true } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { plugin: 'mysql_native_password' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED WITH mysql_native_password;")

      sql = alterUser({ name: 'admin', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf', retainCurrentPassword: true } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', identified: { by: 'asdf1234', plugin: 'mysql_native_password', retainCurrentPassword: true } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' IDENTIFIED WITH mysql_native_password BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost' })
      expect(sql).toBe("ALTER USER 'admin'@'localhost';")

      sql = alterUser({ name: 'admin', host: 'localhost' }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost';")

      sql = alterUser({ name: 'admin', host: 'localhost' }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234' } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234' } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', replace: 'asdfasdf' } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { plugin: 'mysql_native_password' } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf' } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password', retainCurrentPassword: true } })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', replace: 'asdfasdf' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', retainCurrentPassword: true } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { plugin: 'mysql_native_password' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf' } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf', retainCurrentPassword: true } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password', retainCurrentPassword: true } }, { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED BY 'asdf1234';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', replace: 'asdfasdf' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', retainCurrentPassword: true } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { plugin: 'mysql_native_password' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED WITH mysql_native_password;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf' } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf', retainCurrentPassword: true } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser({ name: 'admin', host: 'localhost', identified: { by: 'asdf1234', plugin: 'mysql_native_password', retainCurrentPassword: true } }, { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin'])
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser(['admin'], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin';")

      sql = alterUser(['admin'], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser([{ name: 'admin' }])
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser([{ name: 'admin' }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin';")

      sql = alterUser([{ name: 'admin' }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin';")

      sql = alterUser([{ name: 'admin', host: 'localhost' }])
      expect(sql).toBe("ALTER USER 'admin'@'localhost';")

      sql = alterUser([{ name: 'admin', host: 'localhost' }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin'@'localhost';")

      sql = alterUser([{ name: 'admin', host: 'localhost' }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin'@'localhost';")

      sql = alterUser(['admin', 'other'])
      expect(sql).toBe("ALTER USER 'admin', 'other';")

      sql = alterUser(['admin', 'other'], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other';")

      sql = alterUser(['admin', 'other'], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other';")

      sql = alterUser(['admin', { name: 'other' }])
      expect(sql).toBe("ALTER USER 'admin', 'other';")

      sql = alterUser(['admin', { name: 'other' }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other';")

      sql = alterUser(['admin', { name: 'other' }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other';")

      sql = alterUser(['admin', { name: 'other', identified: { as: 'asdf1234' } }])
      expect(sql).toBe("ALTER USER 'admin', 'other';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234' } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED BY 'asdf1234';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', replace: 'asdfasdf' } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', retainCurrentPassword: true } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { plugin: 'mysql_native_password' } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password;")

      sql = alterUser(['admin', { name: 'other', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf' } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf', retainCurrentPassword: true } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password', retainCurrentPassword: true } }])
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { as: 'asdf1234' } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234' } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED BY 'asdf1234';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', replace: 'asdfasdf' } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', retainCurrentPassword: true } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { plugin: 'mysql_native_password' } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password;")

      sql = alterUser(['admin', { name: 'other', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf' } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf', retainCurrentPassword: true } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password', retainCurrentPassword: true } }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { as: 'asdf1234' } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234' } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED BY 'asdf1234';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', replace: 'asdfasdf' } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', replace: 'asdfasdf', retainCurrentPassword: true } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', retainCurrentPassword: true } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { plugin: 'mysql_native_password' } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED WITH mysql_native_password;")

      sql = alterUser(['admin', { name: 'other', identified: { as: 'asdf1234', plugin: 'mysql_native_password' } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED WITH mysql_native_password AS 'asdf1234';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password' } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf' } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf';")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password', replace: 'asdfasdf', retainCurrentPassword: true } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234' REPLACE 'asdfasdf' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', identified: { by: 'asdf1234', plugin: 'mysql_native_password', retainCurrentPassword: true } }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other' IDENTIFIED WITH mysql_native_password BY 'asdf1234' RETAIN CURRENT PASSWORD;")

      sql = alterUser(['admin', { name: 'other', host: 'localhost' }])
      expect(sql).toBe("ALTER USER 'admin', 'other'@'localhost';")

      sql = alterUser(['admin', { name: 'other', host: 'localhost' }], { ifExists: false })
      expect(sql).toBe("ALTER USER 'admin', 'other'@'localhost';")

      sql = alterUser(['admin', { name: 'other', host: 'localhost' }], { ifExists: true })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin', 'other'@'localhost';")

      roles = 'ALL'
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE ALL;")

      roles = 'ALL'
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE ALL;")

      roles = 'all'
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE ALL;")

      roles = 'NONE'
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE NONE;")

      roles = 'NONE'
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE NONE;")

      roles = 'none'
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE NONE;")

      roles = 'admin'
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'admin';")

      roles = 'admin'
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE 'admin';")

      roles = { name: 'ALL' }
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'ALL';")

      roles = { name: 'ALL' }
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE 'ALL';")

      roles = { name: 'NONE' }
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'NONE';")

      roles = { name: 'NONE' }
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE 'NONE';")

      roles = { name: 'admin' }
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'admin';")

      roles = { name: 'admin' }
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE 'admin';")

      roles = { name: 'admin', host: 'localhost' }
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'admin'@'localhost';")

      roles = ['ALL']
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE ALL;")

      roles = ['ALL']
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE ALL;")

      roles = ['NONE']
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE NONE;")

      roles = ['NONE']
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE NONE;")

      roles = ['admin']
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'admin';")

      roles = ['admin']
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE 'admin';")

      roles = [{ name: 'admin' }]
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'admin';")

      roles = [{ name: 'admin' }]
      sql = alterUser('admin', { ifExists: true, roles })
      expect(sql).toBe("ALTER USER IF EXISTS 'admin' DEFAULT ROLE 'admin';")

      roles = [{ name: 'admin', host: 'localhost' }]
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'admin'@'localhost';")

      roles = ['admin', 'other']
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'admin', 'other';")

      roles = ['admin', { name: 'other' }]
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'admin', 'other';")

      roles = ['admin', { name: 'other', host: 'localhost' }]
      sql = alterUser('admin', { roles })
      expect(sql).toBe("ALTER USER 'admin' DEFAULT ROLE 'admin', 'other'@'localhost';")
    })

  })

})
