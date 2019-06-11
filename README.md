# MySQL Administrative SQL Generator Library

A library for generating MySQL administrative SQL statements. Similar to [Squel] but for `CREATE DATABASE`, `CREATE ROLE`, `CREATE USER`, `GRANT`, and other administrative statements.

Note: This library does NOT provide the ability to connect to a MySQL database and therefore also does NOT execute generated SQL. There are several packages that can be used for executing the generated SQL: [bookshelf][npm-bookshelf], [knex][npm-knex], [mysql][npm-mysql], [mysql2][npm-mysql2], [sequelize][npm-sequelize], etc.

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]


## Why?

Almost all, if not all, ORM's expect that the role(s), user(s), database(s), et al already exist before using the ORM to generate tables and other database objects. Some will provide you some documentation on how to execute raw SQL which can be used to execute SQL statements that create role(s), user(s), database(s), et al but they don't have an API to generate these types of statements. That's where this library comes into play.

For many projects, these administrative SQL statements are not configuration-driven, and hard coding them is perfectly valid. But for those projects that are configuration-driven, an API provides some benefit. For example, this library will properly escape special characters for the arguments that need it.

This library works in the browser too.

Have online documentation instructing the user to execute some administrative SQL? Use this library to provide data-driven documentation.

## Examples

```js
// database-config.js
const dbConfig = {
  database: 'example',
  users: {
    readonly: { name: 'readonly', host: 'localhost' },
  },
}
export default dbConfig
```

**Creating a Database**

```js
import { createDatabase } from 'mysql-admin-sql-gen'

import dbConfig from './database-config'

const sql = createDatabase(dbConfig.database, { ifNotExists: true })
// 'CREATE DATABASE IF NOT EXISTS `example`;'
```

**Creating a User**

```js
import { createUser } from 'mysql-admin-sql-gen'

import dbConfig from './database-config'

const sql = createUser(dbConfig.users.readonly, { ifNotExists: true })
// "CREATE USER IF NOT EXISTS 'readonly'@'localhost'"
```

**Grant Privileges**

```js
import { grant } from 'mysql-admin-sql-gen'

import dbConfig from './database-config'

const sql = grant({
  privileges: ['EXECUTE', 'SELECT'],
  on: {
    level: { database: dbConfig.database },
  },
  to: dbConfig.users.readonly,
})
// "GRANT EXECUTE, SELECT ON `example`.* TO 'readonly'@'localhost'"
```

These examples are just the tip of the iceberg. See the unit tests for a complete set of usage examples.


## Maintainers

- [Danny Hurlburt](https://github.com/dhurlburtusa)


## License

ISC

[coverage-image]: https://coveralls.io/repos/github/dhurlburtusa/mysql-admin-sql-gen/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/dhurlburtusa/mysql-admin-sql-gen?branch=master
[downloads-image]: http://img.shields.io/npm/dm/mysql-admin-sql-gen.svg
[downloads-url]: http://npm-stat.com/charts.html?package=mysql-admin-sql-gen
[license-image]: http://img.shields.io/npm/l/mysql-admin-sql-gen.svg
[license-url]: LICENSE
[npm-badge-png]: https://nodei.co/npm/mysql-admin-sql-gen.png?downloads=true&stars=true
[npm-bookshelf]: https://www.npmjs.com/package/bookshelf
[npm-knex]: https://www.npmjs.com/package/knex
[npm-mysql]: https://www.npmjs.com/package/mysql
[npm-mysql2]: https://www.npmjs.com/package/mysql2
[npm-sequelize]: https://www.npmjs.com/package/sequelize
[package-url]: https://npmjs.org/package/mysql-admin-sql-gen
[squel]: https://www.npmjs.com/package/squel
[travis-svg]: https://travis-ci.org/dhurlburtusa/mysql-admin-sql-gen.svg?branch=master
[travis-url]: https://travis-ci.org/dhurlburtusa/mysql-admin-sql-gen
