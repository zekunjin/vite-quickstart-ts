const storage = {
  get(key: string): string {
    const value = localStorage.getItem(key)
    try {
      return value ? JSON.parse(value) : ''
    } catch (err) {
      return ''
    }
  },

  set(key: string, value: string): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {}
  },

  remove(key: string): void {
    localStorage.removeItem(key)
  }
}

export default storage
