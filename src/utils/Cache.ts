export function setLocalStorage(name: string, params: any) {
  localStorage.setItem(name, JSON.stringify(params))
}

export function getCache(key: string) {
  const value = window.localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }
}

export function deleteCache(key: string) {
  localStorage.removeItem(key)
}

export function clearLocal(name: string, params: any) {
  window.localStorage.clear()
}
