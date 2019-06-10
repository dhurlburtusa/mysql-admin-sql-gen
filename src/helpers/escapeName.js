const SINGLE_QUOTE__RE = /'/g

function escapeName (name) {
  let out = ('' + name).replace(SINGLE_QUOTE__RE, "\\'")

  return out
}

export default escapeName
