import colors from './colors'

export default {
  install() {
    Object.keys(colors).forEach((key: string) => {
      const value: string = colors[key]
      document.documentElement.style.setProperty(`--${key}`, value)
    })
  }
}
