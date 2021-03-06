
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { sha256, sha224 } from 'js-sha256';
import { LanguageService } from 'src/app/services/language.service';
import { AlertService } from 'ngx-alerts';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterUserComponent } from 'src/app/components/register-user/register-user.component';


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
  private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  open() {
    const modalRef = this.modalService.open(RegisterUserComponent);
   // modalRef.componentInstance.name = 'World';
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
        errorMessage = 'Campo requerido';
      }
      if (minlength) {
        errorMessage = 'Minimo 3 caracteres';
      }
      if (email) {
        errorMessage = 'Email invalido';
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
          const user = data['Account']['Account'];
          if (user.validate) {
            this.router.navigate(['']);
           } else {
            this.router.navigate(['validateAccount']);
           }
         } else {
          this.alertService.danger('login fallo');
          this.formLogin.controls['password'].setValue('');
         }
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
