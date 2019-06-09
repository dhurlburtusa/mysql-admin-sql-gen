# MySQL Administrative SQL Generator Library

A library for generating MySQL administrative SQL statements. Similar to [Squel] but for `CREATE DATABASE`, `CREATE ROLE`, `CREATE USER`, `GRANT`, and other administrative statements.

Note: This library does NOT provide the ability to connect to a MySQL database and therefore also does NOT execute generated SQL. There are several packages that can be used for executing the generated SQL: [bookshelf][npm-bookshelf], [knex][npm-knex], [mysql][npm-mysql], [mysql2][npm-mysql2], [sequelize][npm-sequelize], etc.


## Why?

Almost all, if not all, ORM's expect that the role(s), user(s), database(s), et al already exist before using the ORM to generate tables and other database objects. Some will provide you some documentation on how to execute raw SQL which can be used to execute SQL statements that create role(s), user(s), database(s), et al but they don't have an API to generate these types of statements. That's where this library comes into play.

For many projects, these administrative SQL statements are not configuration-driven, and hard coding them is perfectly valid. But for those projects that are configuration-driven, an API provides some benefit. For example, this library will properly escape special characters for the arguments that need it.


## Examples

**Creating a Database**

```js
const createDatabase = require('mysql-admin-sql-gen/lib/createDatabase')

const dbConfig = require('./database-config')

const sql = createDatabase(dbConfig.database, { ifNotExists: true })
```

**Creating a User**

```js
const createUser = require('mysql-admin-sql-gen/lib/createUser')

const dbConfig = require('./database-config')

const sql = createUser(dbConfig.user, { ifNotExists: true })
```

These examples are just the tip of the iceberg. See the unit tests for a complete set of usage examples.


[npm-bookshelf]: https://www.npmjs.com/package/bookshelf
[npm-knex]: https://www.npmjs.com/package/knex
[npm-mysql]: https://www.npmjs.com/package/mysql
[npm-mysql2]: https://www.npmjs.com/package/mysql2
[npm-sequelize]: https://www.npmjs.com/package/sequelize
[squel]: https://www.npmjs.com/package/squel
