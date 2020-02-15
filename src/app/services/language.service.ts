import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public alertsEn = {
    loginFail: 'login failed',

  }

  public alertsEs = {
    loginFail: 'Inicio de sesión fallido'

  }

  public activeLang: string;
  constructor(
    public translate: TranslateService,
  ) {

  }

  initLanguageConfig() {

    let language: string = localStorage.getItem('language');
    if (!language ) {
      language = this.translate.getBrowserLang();
      language = language.match(/en|es/) ? language : 'es';
    }
    this.changeLanguage(language);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  getCurrentLanguage(): string {
    return localStorage.getItem('language');
  }

  getTranslateOf(text: string) {
    return this.translate.get(text);
  }




}
