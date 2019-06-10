function normalizeUser (userIn) {
  let userOut
  if (typeof userIn === 'object' && userIn !== null) {
    userOut = { ...userIn }
    userOut.name = userIn.name || ''
  }
  else {
    userOut = { name: '' + userIn }
  }
  return userOut
}

export default normalizeUser
