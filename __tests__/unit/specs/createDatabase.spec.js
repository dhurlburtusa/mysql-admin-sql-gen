/* eslint-env jest */

const createDatabase = require('../../../lib/createDatabase')

describe('createDatabase.js', () => {

  describe('default export', () => {

    it('should return expected SQL', () => {
      let sql

      sql = createDatabase('example')
      expect(sql).toBe('CREATE DATABASE `example`;')

      sql = createDatabase('example', { charset: 'utf8mb4' })
      expect(sql).toBe('CREATE DATABASE `example` DEFAULT CHARACTER SET utf8mb4;')

      sql = createDatabase('example', { charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
      expect(sql).toBe('CREATE DATABASE `example` DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;')

      sql = createDatabase('example', { encryption: false })
      expect(sql).toBe('CREATE DATABASE `example` DEFAULT ENCRYPTION N;')

      sql = createDatabase('example', { encryption: true })
      expect(sql).toBe('CREATE DATABASE `example` DEFAULT ENCRYPTION Y;')

      sql = createDatabase('example', { ifNotExists: false })
      expect(sql).toBe('CREATE DATABASE `example`;')

      sql = createDatabase('example', { ifNotExists: true })
      expect(sql).toBe('CREATE DATABASE `example` IF NOT EXISTS;')

      sql = createDatabase('example', { charset: 'utf8mb4', encryption: false })
      expect(sql).toBe('CREATE DATABASE `example` DEFAULT CHARACTER SET utf8mb4 DEFAULT ENCRYPTION N;')

      sql = createDatabase('example', { charset: 'utf8mb4', encryption: true })
      expect(sql).toBe('CREATE DATABASE `example` DEFAULT CHARACTER SET utf8mb4 DEFAULT ENCRYPTION Y;')

      sql = createDatabase('example', { charset: 'utf8mb4', encryption: false, ifNotExists: false })
      expect(sql).toBe('CREATE DATABASE `example` DEFAULT CHARACTER SET utf8mb4 DEFAULT ENCRYPTION N;')

      sql = createDatabase('example', { charset: 'utf8mb4', encryption: true, ifNotExists: true })
      expect(sql).toBe('CREATE DATABASE `example` IF NOT EXISTS DEFAULT CHARACTER SET utf8mb4 DEFAULT ENCRYPTION Y;')
    })

  })

})
