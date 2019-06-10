/* eslint-env jest */

import createRole from '../../../src/createRole'

describe('createRole.js', () => {

  describe('default export', () => {

    it('should return expected SQL', () => {
      let sql

      sql = createRole('admin')
      expect(sql).toBe("CREATE ROLE 'admin';")

      sql = createRole('admin', { ifNotExists: true })
      expect(sql).toBe("CREATE ROLE IF NOT EXISTS 'admin';")

      sql = createRole('admin', { ifNotExists: false })
      expect(sql).toBe("CREATE ROLE 'admin';")

      sql = createRole({ name: 'admin' })
      expect(sql).toBe("CREATE ROLE 'admin';")

      sql = createRole({ name: 'admin' }, { ifNotExists: true })
      expect(sql).toBe("CREATE ROLE IF NOT EXISTS 'admin';")

      sql = createRole({ name: 'admin' }, { ifNotExists: false })
      expect(sql).toBe("CREATE ROLE 'admin';")

      sql = createRole({ name: 'admin', host: 'localhost' })
      expect(sql).toBe("CREATE ROLE 'admin'@'localhost';")

      sql = createRole({ name: 'admin', host: 'localhost' }, { ifNotExists: true })
      expect(sql).toBe("CREATE ROLE IF NOT EXISTS 'admin'@'localhost';")

      sql = createRole({ name: 'admin', host: 'localhost' }, { ifNotExists: false })
      expect(sql).toBe("CREATE ROLE 'admin'@'localhost';")

      sql = createRole(['admin'])
      expect(sql).toBe("CREATE ROLE 'admin';")

      sql = createRole(['admin'], { ifNotExists: true })
      expect(sql).toBe("CREATE ROLE IF NOT EXISTS 'admin';")

      sql = createRole(['admin'], { ifNotExists: false })
      expect(sql).toBe("CREATE ROLE 'admin';")

      sql = createRole([{ name: 'admin' }])
      expect(sql).toBe("CREATE ROLE 'admin';")

      sql = createRole([{ name: 'admin' }], { ifNotExists: true })
      expect(sql).toBe("CREATE ROLE IF NOT EXISTS 'admin';")

      sql = createRole([{ name: 'admin' }], { ifNotExists: false })
      expect(sql).toBe("CREATE ROLE 'admin';")

      sql = createRole([{ name: 'admin', host: 'localhost' }])
      expect(sql).toBe("CREATE ROLE 'admin'@'localhost';")

      sql = createRole([{ name: 'admin', host: 'localhost' }], { ifNotExists: true })
      expect(sql).toBe("CREATE ROLE IF NOT EXISTS 'admin'@'localhost';")

      sql = createRole([{ name: 'admin', host: 'localhost' }], { ifNotExists: false })
      expect(sql).toBe("CREATE ROLE 'admin'@'localhost';")

      sql = createRole(['admin', 'app'])
      expect(sql).toBe("CREATE ROLE 'admin', 'app';")

      sql = createRole(['admin', 'app'], { ifNotExists: true })
      expect(sql).toBe("CREATE ROLE IF NOT EXISTS 'admin', 'app';")

      sql = createRole(['admin', 'app'], { ifNotExists: false })
      expect(sql).toBe("CREATE ROLE 'admin', 'app';")

      sql = createRole(['admin', { name: 'app' }])
      expect(sql).toBe("CREATE ROLE 'admin', 'app';")

      sql = createRole(['admin', { name: 'app' }], { ifNotExists: true })
      expect(sql).toBe("CREATE ROLE IF NOT EXISTS 'admin', 'app';")

      sql = createRole(['admin', { name: 'app' }], { ifNotExists: false })
      expect(sql).toBe("CREATE ROLE 'admin', 'app';")

      sql = createRole(['admin', { name: 'app', host: 'localhost' }])
      expect(sql).toBe("CREATE ROLE 'admin', 'app'@'localhost';")

      sql = createRole(['admin', { name: 'app', host: 'localhost' }], { ifNotExists: true })
      expect(sql).toBe("CREATE ROLE IF NOT EXISTS 'admin', 'app'@'localhost';")

      sql = createRole(['admin', { name: 'app', host: 'localhost' }], { ifNotExists: false })
      expect(sql).toBe("CREATE ROLE 'admin', 'app'@'localhost';")

      // Errors

      expect(() => {
        createRole('')
      }).toThrow(TypeError)

      expect(() => {
        createRole({ name: '' })
      }).toThrow(TypeError)

      expect(() => {
        createRole([''])
      }).toThrow(TypeError)

      expect(() => {
        createRole([{ name: '' }])
      }).toThrow(TypeError)
    })

  })

})
