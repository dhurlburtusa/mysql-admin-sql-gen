import escapeName from './escapeName'
import normalizeAccountName from './normalizeAccountName'

const AT_BLANK_HOST__RE = /@''$/

function accountNameToSql (accountName) {
  const accName = normalizeAccountName(accountName)
  let user = ('' + (accName.user || '')).trim()
  const sql = [
    `'${escapeName(user)}'`,
    '@',
    `'${accName.host || ''}'`,
  ]
    .join('')
    // If `accName.host` is not specified, then the above will result in an invalid
    // `@''` at the end. In this case, we remove it so that only the user name
    // remains, which is valid.
    .replace(AT_BLANK_HOST__RE, '')
  return sql
}

export default accountNameToSql
