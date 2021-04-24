export default {
  getViewSize() {
    const de = document.documentElement
    const db = document.body
    const width = de.clientWidth || db.clientWidth
    const height = de.clientHeight || db.clientHeight
    return { width, height }
  }
}
