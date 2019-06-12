import escapeName from './escapeName'

function identifiedToSql (identified) {
  let sql = ''

  if (typeof identified === 'object' && identified !== null) {
    const {
      as,
      by,
      plugin,
      replace,
      retainCurrentPassword,
    } = identified

    if (as && plugin) {
      sql = `IDENTIFIED WITH ${plugin} AS '${escapeName(as)}'`
    }
    else if (!as && by && plugin) {
      sql = [
        `IDENTIFIED WITH ${plugin} BY '${escapeName(by)}'`,
        replace ? `REPLACE '${escapeName(replace)}'` : null,
        retainCurrentPassword ? 'RETAIN CURRENT PASSWORD' : null,
      ].filter(Boolean).join(' ')
    }
    else if (!as && !by && plugin) {
      sql = `IDENTIFIED WITH ${plugin}`
    }
    else if (by && !plugin) {
      sql = [
        `IDENTIFIED BY '${escapeName(by)}'`,
        replace ? `REPLACE '${escapeName(replace)}'` : null,
        retainCurrentPassword ? 'RETAIN CURRENT PASSWORD' : null,
      ].filter(Boolean).join(' ')
    }
  }

  return sql
}

export default identifiedToSql
