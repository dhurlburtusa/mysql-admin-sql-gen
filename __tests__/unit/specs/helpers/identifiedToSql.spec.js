/* eslint-env jest */

import identifiedToSql from '../../../../src/helpers/identifiedToSql'

describe('helpers/identifiedToSql.js', () => {

  describe('default export', () => {

    it('should return expected value', () => {
      let sql

      sql = identifiedToSql()
      expect(sql).toBe('')

      sql = identifiedToSql({})
      expect(sql).toBe('')

      sql = identifiedToSql({ as: 'asdf1234' })
      expect(sql).toBe('')

      sql = identifiedToSql({ by: 'asdf1234' })
      expect(sql).toBe("IDENTIFIED BY 'asdf1234'")

      sql = identifiedToSql({ plugin: 'mysql_native_password' })
      expect(sql).toBe('IDENTIFIED WITH mysql_native_password')

      sql = identifiedToSql({ as: 'asdf1234', plugin: 'mysql_native_password' })
      expect(sql).toBe("IDENTIFIED WITH mysql_native_password AS 'asdf1234'")

      sql = identifiedToSql({ by: 'asdf1234', plugin: 'mysql_native_password' })
      expect(sql).toBe("IDENTIFIED WITH mysql_native_password BY 'asdf1234'")
    })

  })

})
