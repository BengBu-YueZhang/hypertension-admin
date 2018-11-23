export function getSessionStorage (key) {
  return window.sessionStorage.getItem(key)
}

export function setSessionStorage(key, value) {
  window.sessionStorage.setItem(key, value)
}

export function isHaveSessionStorage(key) {
  if (window.sessionStorage.getItem(key) === null) {
    return false
  }
  return true
}

export function removeSessionStorage(key) {
  window.sessionStorage.removeItem(key)
}

export function clearSessionStorage() {
  window.sessionStorage.clear()
}
