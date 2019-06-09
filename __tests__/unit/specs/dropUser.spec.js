/* eslint-env jest */

const dropUser = require('../../../lib/dropUser')

describe('dropUser.js', () => {

  describe('default export', () => {

    it('should return expected SQL', () => {
      let sql

      sql = dropUser('admin')
      expect(sql).toBe("DROP USER 'admin';")

      sql = dropUser('admin', { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin';")

      sql = dropUser({ name: 'admin' })
      expect(sql).toBe("DROP USER 'admin';")

      sql = dropUser({ name: 'admin' }, { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin';")

      sql = dropUser({ name: 'admin', host: 'localhost' })
      expect(sql).toBe("DROP USER 'admin'@'localhost';")

      sql = dropUser({ name: 'admin', host: 'localhost' }, { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin'@'localhost';")

      sql = dropUser(['admin'])
      expect(sql).toBe("DROP USER 'admin';")

      sql = dropUser(['admin'], { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin';")

      sql = dropUser([{ name: 'admin' }])
      expect(sql).toBe("DROP USER 'admin';")

      sql = dropUser([{ name: 'admin' }], { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin';")

      sql = dropUser([{ name: 'admin', host: 'localhost' }])
      expect(sql).toBe("DROP USER 'admin'@'localhost';")

      sql = dropUser([{ name: 'admin', host: 'localhost' }], { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin'@'localhost';")

      sql = dropUser(['admin', 'other'])
      expect(sql).toBe("DROP USER 'admin', 'other';")

      sql = dropUser(['admin', 'other'], { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin', 'other';")

      sql = dropUser(['admin', { name: 'other' }])
      expect(sql).toBe("DROP USER 'admin', 'other';")

      sql = dropUser(['admin', { name: 'other' }], { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin', 'other';")

      sql = dropUser(['admin', { name: 'other', host: 'localhost' }])
      expect(sql).toBe("DROP USER 'admin', 'other'@'localhost';")

      sql = dropUser(['admin', { name: 'other', host: 'localhost' }], { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin', 'other'@'localhost';")

      sql = dropUser([{ name: 'admin', host: 'localhost' }, { name: 'other', host: 'localhost' }])
      expect(sql).toBe("DROP USER 'admin'@'localhost', 'other'@'localhost';")

      sql = dropUser([{ name: 'admin', host: 'localhost' }, { name: 'other', host: 'localhost' }], { ifExists: true })
      expect(sql).toBe("DROP USER IF EXISTS 'admin'@'localhost', 'other'@'localhost';")
    })

  })

})
