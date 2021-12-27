import AppService from './app.service'

export default class AppController {
  constructor(private readonly appService: AppService) {}

  get primaryColor() {
    return this.appService.getPrimaryColor()
  }

  get language() {
    return this.appService.getLanguage()
  }

  setLanguage(language: string) {
    this.appService.setLanguage(language)
  }

  setPrimaryColor(color: string) {
    this.appService.setPrimaryColor(color)
  }
}
