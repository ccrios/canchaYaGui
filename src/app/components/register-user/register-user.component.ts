import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { sha256, sha224 } from 'js-sha256';
import { LanguageService } from 'src/app/services/language.service';
import { AlertService } from 'ngx-alerts';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  formRegister: FormGroup;
  submitted = false;
  selectedLanguage: string;
constructor(
  private formBuilder: FormBuilder ,
  private registerService: RegisterService,
  private auth: AuthService,
  private router: Router,
  public languageService: LanguageService,
  public alertService: AlertService,
  public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required]],
      lastName:  ['', Validators.required],
      phone:  ['', Validators.required],
      address:  ['', Validators.required],
    });
  }

  public getError(controlName: string): string {
    let errorMessage = null;
    const control = this.formRegister.get(controlName);
    if (control.touched && control.errors != null) {
      const error = JSON.stringify(control.errors);
      const { required } = control.errors;
      const { minlength } = control.errors;
      const { email } = control.errors;
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



  public register() {
    const passwordSha256 = sha256(this.formRegister.controls['password'].value);
    this.formRegister.controls['password'].setValue(passwordSha256);
    const userData = this.formRegister.value;
    this.registerService.postRegister(userData)
    .subscribe(
      (data) => { // Success
         if (data['status']) {
          //this.auth.sendInfo(data);
          this.alertService.success('Registro Exitoso');
          this.activeModal.dismiss();
         } else {
          this.alertService.danger('Registro fallido');
          this.formRegister.controls['password'].setValue('');
         }
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
