export function setLocalStorage(name: string, params: any) {
  localStorage.setItem(name, JSON.stringify(params));
  return true;
}
