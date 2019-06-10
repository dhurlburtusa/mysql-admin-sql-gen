const testRoot = '<rootDir>/__tests__/unit/'

module.exports = {
  coverageDirectory: `${testRoot}coverage/`,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  // Note: rootDir is relative to the directory containing this file.
  rootDir: '../../',
  roots: [
    `${testRoot}specs/`,
    '<rootDir>/src/',
  ],

  setupFiles: [
    `${testRoot}setup.js`,
  ],

  testPathIgnorePatterns: [
    // `${testRoot}specs/createDatabase.spec.js`,
    // `${testRoot}specs/createRole.spec.js`,
    // `${testRoot}specs/createUser.spec.js`,
    // `${testRoot}specs/dropDatabase.spec.js`,
    // `${testRoot}specs/dropRole.spec.js`,
    // `${testRoot}specs/dropUser.spec.js`,
    // `${testRoot}specs/grant.spec.js`,
    // `${testRoot}specs/revoke.spec.js`,

    // `${testRoot}specs/helpers/accountNameToSql.spec.js`,
    // `${testRoot}specs/helpers/identifiedToSql.spec.js`,
    // `${testRoot}specs/helpers/roleToSql.spec.js`,
  ],
}
