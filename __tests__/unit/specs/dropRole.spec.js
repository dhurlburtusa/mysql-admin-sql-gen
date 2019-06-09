/* eslint-env jest */

const dropRole = require('../../../lib/dropRole')

describe('dropRole.js', () => {

  describe('default export', () => {

    it('should return expected SQL', () => {
      let sql

      sql = dropRole('admin')
      expect(sql).toBe("DROP ROLE 'admin';")

      sql = dropRole('admin', { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin';")

      sql = dropRole({ name: 'admin' })
      expect(sql).toBe("DROP ROLE 'admin';")

      sql = dropRole({ name: 'admin' }, { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin';")

      sql = dropRole({ name: 'admin', host: 'localhost' })
      expect(sql).toBe("DROP ROLE 'admin'@'localhost';")

      sql = dropRole({ name: 'admin', host: 'localhost' }, { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin'@'localhost';")

      sql = dropRole(['admin'])
      expect(sql).toBe("DROP ROLE 'admin';")

      sql = dropRole(['admin'], { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin';")

      sql = dropRole([{ name: 'admin' }])
      expect(sql).toBe("DROP ROLE 'admin';")

      sql = dropRole([{ name: 'admin' }], { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin';")

      sql = dropRole([{ name: 'admin', host: 'localhost' }])
      expect(sql).toBe("DROP ROLE 'admin'@'localhost';")

      sql = dropRole([{ name: 'admin', host: 'localhost' }], { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin'@'localhost';")

      sql = dropRole(['admin', 'other'])
      expect(sql).toBe("DROP ROLE 'admin', 'other';")

      sql = dropRole(['admin', 'other'], { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin', 'other';")

      sql = dropRole(['admin', { name: 'other' }])
      expect(sql).toBe("DROP ROLE 'admin', 'other';")

      sql = dropRole(['admin', { name: 'other' }], { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin', 'other';")

      sql = dropRole(['admin', { name: 'other', host: 'localhost' }])
      expect(sql).toBe("DROP ROLE 'admin', 'other'@'localhost';")

      sql = dropRole(['admin', { name: 'other', host: 'localhost' }], { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin', 'other'@'localhost';")

      sql = dropRole([{ name: 'admin', host: 'localhost' }, { name: 'other', host: 'localhost' }])
      expect(sql).toBe("DROP ROLE 'admin'@'localhost', 'other'@'localhost';")

      sql = dropRole([{ name: 'admin', host: 'localhost' }, { name: 'other', host: 'localhost' }], { ifExists: true })
      expect(sql).toBe("DROP ROLE IF EXISTS 'admin'@'localhost', 'other'@'localhost';")
    })

  })

})
