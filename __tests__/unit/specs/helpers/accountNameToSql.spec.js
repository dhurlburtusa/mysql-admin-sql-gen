/* eslint-env jest */

import accountNameToSql from '../../../../src/helpers/accountNameToSql'

describe('helpers/accountNameToSql.js', () => {

  describe('default export', () => {

    it('should return expected value', () => {
      let sql

      sql = accountNameToSql({})
      expect(sql).toBe("''")

      sql = accountNameToSql({ user: '' })
      expect(sql).toBe("''")

      sql = accountNameToSql({ user: ' ' })
      expect(sql).toBe("''")

      sql = accountNameToSql({ user: 'foo' })
      expect(sql).toBe("'foo'")

      sql = accountNameToSql({ user: "@''" })
      expect(sql).toBe("'@\\'\\''")

      sql = accountNameToSql({ host: 'localhost' })
      expect(sql).toBe("''@'localhost'")

      sql = accountNameToSql({ user: '', host: 'localhost' })
      expect(sql).toBe("''@'localhost'")

      sql = accountNameToSql({ user: ' ', host: 'localhost' })
      expect(sql).toBe("''@'localhost'")

      sql = accountNameToSql({ user: 'foo', host: 'localhost' })
      expect(sql).toBe("'foo'@'localhost'")

      sql = accountNameToSql('')
      expect(sql).toBe("''")

      sql = accountNameToSql(' ')
      expect(sql).toBe("''")

      sql = accountNameToSql('foo')
      expect(sql).toBe("'foo'")

      sql = accountNameToSql('"')
      expect(sql).toBe("'\"'")

      sql = accountNameToSql("@''")
      expect(sql).toBe("'@\\'\\''")
    })

  })

})
