function normalizeRole (roleIn) {
  let roleOut
  if (typeof roleIn === 'object' && roleIn !== null) {
    roleOut = roleIn
  }
  else {
    roleOut = { name: ('' + (roleIn || '')).trim() }
  }
  return roleOut
}

module.exports = normalizeRole
