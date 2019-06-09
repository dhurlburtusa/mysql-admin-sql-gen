/* eslint-env jest */

const roleToSql = require('../../../../lib/helpers/roleToSql')

describe('helpers/roleToSql.js', () => {

  describe('default export', () => {

    it('should return expected value', () => {
      let sql

      expect(() => {
        sql = roleToSql()
      }).toThrow(TypeError)

      expect(() => {
        sql = roleToSql({})
      }).toThrow(TypeError)

      sql = roleToSql({ name: 'foo' })
      expect(sql).toBe("'foo'")

      expect(() => {
        sql = roleToSql({ host: 'localhost' })
      }).toThrow(TypeError)

      sql = roleToSql({ name: 'foo', host: 'localhost' })
      expect(sql).toBe("'foo'@'localhost'")

      sql = roleToSql({ name: "@''" })
      expect(sql).toBe("'@\\'\\''")

      sql = roleToSql('foo')
      expect(sql).toBe("'foo'")

      expect(() => {
        sql = roleToSql('')
      }).toThrow(TypeError)

      expect(() => {
        sql = roleToSql(' ')
      }).toThrow(TypeError)

      sql = roleToSql('"')
      expect(sql).toBe("'\"'")

      sql = roleToSql("@''")
      expect(sql).toBe("'@\\'\\''")
    })

  })

})
