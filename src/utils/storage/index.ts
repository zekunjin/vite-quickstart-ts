export default {
  set(key: string, value: string) {
    localStorage.setItem(key, value)
  },

  get(key: string) {
    return localStorage.getItem(key) || ''
  },

  remove(key: string): void {
    localStorage.removeItem(key)
  }
}
