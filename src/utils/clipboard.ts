export default {
  copy(value: string): Promise<void> {
    return navigator.clipboard.writeText(value)
  },

  paste(): Promise<string> {
    return navigator.clipboard.readText()
  }
}
