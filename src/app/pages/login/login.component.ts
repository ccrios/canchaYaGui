import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { sha256, sha224 } from 'js-sha256';
import { LanguageService } from 'src/app/services/language.service';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  submitted = false;
  selectedLanguage: string;
constructor(
  private formBuilder: FormBuilder ,
  private loginService: LoginService,
  private auth: AuthService,
  private router: Router,
  public languageService: LanguageService,
  public alertService: AlertService,
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.selectedLanguage = this.languageService.getCurrentLanguage();
    this.changeLogo(this.languageService.getCurrentLanguage());
  }

  public changeLanguage(lang) {
    this.changeLogo(lang);
    this.languageService.changeLanguage(lang);
  }


  changeLogo(lang){
    const logo = document.getElementById('logo');
    if (lang === 'es') {
      // tslint:disable-next-line: max-line-length
      logo.style.backgroundImage = 'url("https://s3.us-east-2.amazonaws.com/s3.provibes/files/static-images/logo+v7+para+fondo+blanco+ES.png")';
    } else if (lang === 'en') {
      // tslint:disable-next-line: max-line-length
      logo.style.backgroundImage = 'url("https://s3.us-east-2.amazonaws.com/s3.provibes/files/static-images/logo+v7+para+fondo+blanco+EN.png")';
    }
  }

  public getError(controlName: string): string {
    let errorMessage = null;
    const control = this.formLogin.get(controlName);
    if (control.touched && control.errors != null) {
      const error = JSON.stringify(control.errors);
      const { required } = control.errors;
      const { minlength } = control.errors;
      const { email } = control.errors;
      if (required) {
        errorMessage = 'register.requiredField';
      }
      if (minlength) {
        errorMessage = 'register.minumumCharacters';
      }
      if (email) {
        errorMessage = 'register.invalidEmail';
      }
      // console.log(control.errors);
    }
    return errorMessage;
  }

  public login() {
    const passwordSha256 = sha256(this.formLogin.controls['password'].value);
    this.formLogin.controls['password'].setValue(passwordSha256);
    const userData = this.formLogin.value;
    this.loginService.postLogin(userData)
    .subscribe(
      (data) => { // Success
         if (data['status']) {
          this.auth.sendInfo(data);
          const user = data['user']['user'];
          if (user.validate) {
            this.router.navigate(['market']);
           } else {
            this.router.navigate(['validateAccount']);
           }
         } else {

          const traduction = this.languageService.getTranslateOf('login.loginFail');
          this.alertService.danger(traduction['value']);
          this.formLogin.controls['password'].setValue('');
         }
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
