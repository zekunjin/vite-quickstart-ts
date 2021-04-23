export default {
  set(key: string, value: string): void {
    localStorage.setItem(key, value)
  },

  get(key: string): string {
    return localStorage.getItem(key) || ''
  },

  remove(key: string): void {
    localStorage.removeItem(key)
  }
}
