# MySQL Administrative SQL Generator Library

A library for generating MySQL administrative SQL statements. Similar to [Squel] but for `CREATE DATABASE`, `CREATE ROLE`, `CREATE USER`, `GRANT`, and other administrative statements.

(If anyone knows of a JavaScript/Node.js library that performs the same or nearly the same functionality as this library, [please let me know](https://github.com/dhurlburtusa/mysql-admin-sql-gen/issues). I searched for an hour or two looking for a similar library before I decided to create this library.)

Note: This library does NOT provide the ability to connect to a MySQL database and therefore also does NOT execute generated SQL. There are several packages that can be used for executing the generated SQL: [bookshelf][npm-bookshelf], [knex][npm-knex], [mysql][npm-mysql], [mysql2][npm-mysql2], [sequelize][npm-sequelize], etc.

[![GitHub Repo][github-repo-image]][github-repo-url]
[![NPM Version][npm-version-image]][npm-url]
[![Minimum Node Version][node-version-min-image]][node-dist-url]
[![CircleCI][circleci-image]][circleci-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Lines of Code][codeclimate-loc-image]][codeclimate-loc-url]
[![Gzip Size][gzip-image]][bundlephobia-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![GitHub Stars][github-stars-image]][github-stars-url]


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


[bundlephobia-url]: https://bundlephobia.com/result?p=mysql-admin-sql-gen
[circleci-image]: https://circleci.com/gh/dhurlburtusa/mysql-admin-sql-gen.svg?style=svg
[circleci-url]: https://circleci.com/gh/dhurlburtusa/mysql-admin-sql-gen
[codeclimate-loc-image]: https://badgen.net/codeclimate/loc/dhurlburtusa/mysql-admin-sql-gen
[codeclimate-loc-url]: https://codeclimate.com/github/dhurlburtusa/mysql-admin-sql-gen/trends/loc
[coverage-image]: https://badgen.net/coveralls/c/github/dhurlburtusa/mysql-admin-sql-gen/master
[coverage-url]: https://coveralls.io/github/dhurlburtusa/mysql-admin-sql-gen?branch=master
[downloads-image]: https://badgen.net/npm/dw/mysql-admin-sql-gen
[downloads-url]: http://npm-stat.com/charts.html?package=mysql-admin-sql-gen
[github-repo-image]: https://badgen.net/badge/-/github?icon=github&label
[github-repo-url]: https://github.com/dhurlburtusa/mysql-admin-sql-gen
[github-stars-image]: https://badgen.net/github/stars/dhurlburtusa/mysql-admin-sql-gen
[github-stars-url]: https://github.com/dhurlburtusa/mysql-admin-sql-gen/stargazers
[gzip-image]: https://badgen.net/bundlephobia/minzip/mysql-admin-sql-gen
[license-image]: https://badgen.net/npm/license/mysql-admin-sql-gen
[license-url]: LICENSE
[node-dist-url]: https://nodejs.org/dist/
[node-version-min-image]: https://badgen.net/npm/node/mysql-admin-sql-gen
[npm-bookshelf]: https://www.npmjs.com/package/bookshelf
[npm-knex]: https://www.npmjs.com/package/knex
[npm-mysql]: https://www.npmjs.com/package/mysql
[npm-mysql2]: https://www.npmjs.com/package/mysql2
[npm-version-image]: https://badgen.net/npm/v/mysql-admin-sql-gen
[npm-sequelize]: https://www.npmjs.com/package/sequelize
[npm-url]: https://www.npmjs.com/package/mysql-admin-sql-gen
[squel]: https://www.npmjs.com/package/squel
[travis-image]: https://badgen.net/travis/dhurlburtusa/mysql-admin-sql-gen/master
[travis-url]: https://travis-ci.org/dhurlburtusa/mysql-admin-sql-gen
