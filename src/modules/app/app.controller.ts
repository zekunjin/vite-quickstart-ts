import AppService from './app.service'

export default class AppController {
  public primaryColor: string
  public language: string

  constructor(private readonly appService: AppService) {
    this.primaryColor = this.appService.getPrimaryColor()
    this.language = this.appService.getLanguage()
  }

  setLanguage(language: string) {
    this.appService.setLanguage(language)
  }

  setPrimaryColor(color: string) {
    this.appService.setPrimaryColor(color)
  }
}
