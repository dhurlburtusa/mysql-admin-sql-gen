const BACKTICK__RE = /`/g

function escapeIdentifier (identifier) {
  let out = ('' + identifier).replace(BACKTICK__RE, '``')

  return out
}

export default escapeIdentifier
