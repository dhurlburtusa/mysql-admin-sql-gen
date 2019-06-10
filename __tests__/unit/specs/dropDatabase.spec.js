/* eslint-env jest */

import dropDatabase from '../../../src/dropDatabase'

describe('dropDatabase.js', () => {

  describe('default export', () => {

    it('should return expected SQL', () => {
      let sql

      sql = dropDatabase('example')
      expect(sql).toBe('DROP DATABASE `example`;')

      sql = dropDatabase('example', { ifExists: true })
      expect(sql).toBe('DROP DATABASE IF EXISTS `example`;')

      sql = dropDatabase('odd`name')
      expect(sql).toBe('DROP DATABASE `odd``name`;')
    })

  })

})
