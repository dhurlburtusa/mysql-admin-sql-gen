const escapeName = require('./escapeName')

function identifiedToSql (identified) {
  let sql = ''

  if (typeof identified === 'object' && identified !== null) {
    const { as, by, plugin } = identified
    sql = [
      as && plugin ? `IDENTIFIED WITH ${plugin} AS '${escapeName(as)}'` : null,
      !as && by && plugin ? `IDENTIFIED WITH ${plugin} BY '${escapeName(by)}'` : null,
      !as && !by && plugin ? `IDENTIFIED WITH ${plugin}` : null,
      by && !plugin ? `IDENTIFIED BY '${escapeName(by)}'` : null,
    ].filter(Boolean).join(' ').trim()
  }

  return sql
}

module.exports = identifiedToSql
