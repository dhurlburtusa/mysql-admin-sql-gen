/* eslint-env jest */

import revoke from '../../../src/revoke'

describe('revoke.js', () => {

  describe('default export', () => {

    it('should return expected SQL', () => {
      let sql

      sql = revoke({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        from: 'admin',
      })
      expect(sql).toBe("REVOKE SELECT ON `example`.* FROM 'admin';")

      sql = revoke({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        from: { name: 'admin', host: 'localhost' },
      })
      expect(sql).toBe("REVOKE SELECT ON `example`.* FROM 'admin'@'localhost';")

      sql = revoke({
        privileges: 'SELECT',
        on: { level: { database: 'example', table: '*' } },
        from: { name: 'admin', host: 'localhost' },
      })
      expect(sql).toBe("REVOKE SELECT ON `example`.* FROM 'admin'@'localhost';")

      sql = revoke({
        privileges: 'SELECT',
        on: { level: { database: 'example', table: 'foo' } },
        from: { name: 'admin', host: 'localhost' },
      })
      expect(sql).toBe("REVOKE SELECT ON `example`.`foo` FROM 'admin'@'localhost';")

      sql = revoke({
        privileges: ['SELECT', 'EXECUTE'],
        on: { level: { database: 'example', table: 'foo' } },
        from: { name: 'admin', host: 'localhost' },
      })
      expect(sql).toBe("REVOKE SELECT, EXECUTE ON `example`.`foo` FROM 'admin'@'localhost';")

      sql = revoke({
        privileges: ['ALL', 'GRANT OPTION'],
        from: { name: 'admin', host: 'localhost' },
      })
      expect(sql).toBe("REVOKE ALL, GRANT OPTION FROM 'admin'@'localhost';")

      sql = revoke({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        from: [{ name: 'admin', host: 'localhost' }],
      })
      expect(sql).toBe("REVOKE SELECT ON `example`.* FROM 'admin'@'localhost';")

      sql = revoke({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        from: [{ name: 'admin', host: 'localhost' }, 'other'],
      })
      expect(sql).toBe("REVOKE SELECT ON `example`.* FROM 'admin'@'localhost', 'other';")

      sql = revoke({
        privileges: 'SELECT',
        on: { level: { database: 'example' } },
        from: [{ name: 'admin', host: 'localhost' }, { name: 'other' }],
      })
      expect(sql).toBe("REVOKE SELECT ON `example`.* FROM 'admin'@'localhost', 'other';")

      sql = revoke({
        proxy: true,
        on: { name: 'admin', host: 'localhost' },
        from: { name: 'miniadmin', host: '127.0.0.1' },
      })
      expect(sql).toBe("REVOKE PROXY ON 'admin'@'localhost' FROM 'miniadmin'@'127.0.0.1';")

      sql = revoke({
        proxy: true,
        on: { name: 'admin', host: 'localhost' },
        from: [{ name: 'miniadmin', host: '127.0.0.1' }],
      })
      expect(sql).toBe("REVOKE PROXY ON 'admin'@'localhost' FROM 'miniadmin'@'127.0.0.1';")

      sql = revoke({
        proxy: true,
        on: { name: 'admin', host: 'localhost' },
        from: [{ name: 'miniadmin', host: '127.0.0.1' }, 'other'],
      })
      expect(sql).toBe("REVOKE PROXY ON 'admin'@'localhost' FROM 'miniadmin'@'127.0.0.1', 'other';")

      sql = revoke({
        on: 'admin',
        from: { name: 'miniadmin', host: 'localhost' },
      })
      expect(sql).toBe("REVOKE 'admin' FROM 'miniadmin'@'localhost';")

      sql = revoke({
        on: ['admin', 'other'],
        from: { name: 'miniadmin', host: 'localhost' },
      })
      expect(sql).toBe("REVOKE 'admin', 'other' FROM 'miniadmin'@'localhost';")

      sql = revoke({
        on: 'admin',
        from: [{ name: 'miniadmin', host: 'localhost' }, 'other'],
      })
      expect(sql).toBe("REVOKE 'admin' FROM 'miniadmin'@'localhost', 'other';")
    })

  })

})
