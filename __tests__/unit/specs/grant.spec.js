/* eslint-env jest */

const grant = require('../../../lib/grant')

describe('grant.js', () => {

  describe('default export', () => {

    it('should return expected SQL', () => {
      let sql

      sql = grant({
        privileges: 'SELECT',
        on: { level: '*' },
        to: 'admin',
      })
      expect(sql).toBe("GRANT SELECT ON * TO 'admin';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: 'foo' },
        to: 'admin',
      })
      expect(sql).toBe("GRANT SELECT ON `foo` TO 'admin';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        to: 'admin',
      })
      expect(sql).toBe("GRANT SELECT ON `example`.* TO 'admin';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        to: { name: 'admin' },
      })
      expect(sql).toBe("GRANT SELECT ON `example`.* TO 'admin';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        to: { name: 'admin', host: 'localhost' },
      })
      expect(sql).toBe("GRANT SELECT ON `example`.* TO 'admin'@'localhost';")

      sql = grant({
        privileges: 'EXECUTE',
        on: { level: { database: 'example', routine: 'foo' } },
        to: { name: 'admin', host: 'localhost' },
      })
      expect(sql).toBe("GRANT EXECUTE ON `example`.`foo` TO 'admin'@'localhost';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { database: 'example', table: '*' } },
        to: { name: 'admin', host: 'localhost' },
      })
      expect(sql).toBe("GRANT SELECT ON `example`.* TO 'admin'@'localhost';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { database: 'example', table: 'foo' } },
        to: { name: 'admin', host: 'localhost' },
      })
      expect(sql).toBe("GRANT SELECT ON `example`.`foo` TO 'admin'@'localhost';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { table: 'foo' } },
        to: 'admin',
      })
      expect(sql).toBe("GRANT SELECT ON `foo` TO 'admin';")

      sql = grant({
        privileges: ['SELECT', 'EXECUTE'],
        on: { level: { database: 'example' } },
        to: 'admin',
      })
      expect(sql).toBe("GRANT SELECT, EXECUTE ON `example`.* TO 'admin';")

      sql = grant({
        privileges: ['SELECT', { type: 'EXECUTE' }],
        on: { level: { database: 'example' } },
        to: 'admin',
      })
      expect(sql).toBe("GRANT SELECT, EXECUTE ON `example`.* TO 'admin';")

      sql = grant({
        privileges: [{ type: 'SELECT', columns: 'public' }, { type: 'EXECUTE' }],
        on: { level: { database: 'example' } },
        to: 'admin',
      })
      expect(sql).toBe("GRANT SELECT (`public`), EXECUTE ON `example`.* TO 'admin';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        to: [{ name: 'admin', host: 'localhost' }],
      })
      expect(sql).toBe("GRANT SELECT ON `example`.* TO 'admin'@'localhost';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        to: [{ name: 'admin', host: 'localhost' }, 'other'],
      })
      expect(sql).toBe("GRANT SELECT ON `example`.* TO 'admin'@'localhost', 'other';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        to: [{ name: 'admin', host: 'localhost' }, { name: 'other' }],
      })
      expect(sql).toBe("GRANT SELECT ON `example`.* TO 'admin'@'localhost', 'other';")

      sql = grant({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        to: 'admin',
        withGrant: true,
      })
      expect(sql).toBe("GRANT SELECT ON `example`.* TO 'admin' WITH GRANT OPTION;")

      // Proxy
      sql = grant({
        proxy: true,
        on: { name: 'admin', host: 'localhost' },
        to: { name: 'miniadmin', host: '127.0.0.1' },
      })
      expect(sql).toBe("GRANT PROXY ON 'admin'@'localhost' TO 'miniadmin'@'127.0.0.1';")

      sql = grant({
        proxy: true,
        on: { name: 'admin', host: 'localhost' },
        to: [{ name: 'miniadmin', host: '127.0.0.1' }],
      })
      expect(sql).toBe("GRANT PROXY ON 'admin'@'localhost' TO 'miniadmin'@'127.0.0.1';")

      sql = grant({
        proxy: true,
        on: { name: 'admin', host: 'localhost' },
        to: [{ name: 'miniadmin', host: '127.0.0.1' }, 'other'],
      })
      expect(sql).toBe("GRANT PROXY ON 'admin'@'localhost' TO 'miniadmin'@'127.0.0.1', 'other';")

      sql = grant({
        proxy: true,
        on: { name: 'admin', host: 'localhost' },
        to: { name: 'miniadmin', host: '127.0.0.1' },
        withGrant: true,
      })
      expect(sql).toBe("GRANT PROXY ON 'admin'@'localhost' TO 'miniadmin'@'127.0.0.1' WITH GRANT OPTION;")

      // Roles
      sql = grant({
        roles: 'admin',
        to: { name: 'miniadmin', host: 'localhost' },
      })
      expect(sql).toBe("GRANT 'admin' TO 'miniadmin'@'localhost';")

      sql = grant({
        roles: ['admin', 'other'],
        to: { name: 'miniadmin', host: 'localhost' },
      })
      expect(sql).toBe("GRANT 'admin', 'other' TO 'miniadmin'@'localhost';")

      sql = grant({
        roles: 'admin',
        to: [{ name: 'miniadmin', host: 'localhost' }, 'other'],
      })
      expect(sql).toBe("GRANT 'admin' TO 'miniadmin'@'localhost', 'other';")

      sql = grant({
        roles: 'admin',
        to: [{ name: 'miniadmin', host: 'localhost' }, 'other'],
        withAdmin: true,
      })
      expect(sql).toBe("GRANT 'admin' TO 'miniadmin'@'localhost', 'other' WITH ADMIN OPTION;")

      // Errors

      expect(() => {
        sql = grant({
          // Missing `privileges`
          on: { level: '*' },
          to: 'admin',
        })
      }).toThrow(TypeError)

      expect(() => {
        sql = grant({
          // Missing `proxy`
          on: { name: 'admin', host: 'localhost' },
          to: 'admin',
        })
      }).toThrow(TypeError)

      expect(() => {
        sql = grant({
          privileges: 'SELECT',
          on: {},
          to: 'admin',
        })
      }).toThrow(TypeError)

      expect(() => {
        sql = grant({
          privileges: 'SELECT',
          on: { level: null },
          to: 'admin',
        })
      }).toThrow(TypeError)

      expect(() => {
        sql = grant({
          privileges: 'SELECT',
          on: { level: {} },
          to: 'admin',
        })
      }).toThrow(TypeError)

      expect(() => {
        sql = grant({
          privileges: 'SELECT',
          on: { level: { unexpectedProp: 'foo' } },
          to: 'admin',
        })
      }).toThrow(TypeError)

    })

  })

})
