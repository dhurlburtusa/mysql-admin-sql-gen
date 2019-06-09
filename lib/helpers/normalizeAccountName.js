function normalizeAccountName (accountNameIn) {
  let accountNameOut
  if (typeof accountNameIn === 'object' && accountNameIn !== null) {
    accountNameOut = { ...accountNameIn }
    accountNameOut.user = accountNameIn.user || ''
  }
  else {
    accountNameOut = { user: '' + accountNameIn }
  }
  return accountNameOut
}

module.exports = normalizeAccountName
