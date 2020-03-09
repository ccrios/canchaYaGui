import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { sha256, sha224 } from 'js-sha256';
import { AlertService } from 'ngx-alerts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-restore-passwor',
  templateUrl: './restore-passwor.component.html',
  styleUrls: ['./restore-passwor.component.scss']
})
export class RestorePassworComponent implements OnInit {


  formData: FormGroup;
  validate: any;
constructor(
  private route: ActivatedRoute,
  private formBuilder: FormBuilder ,
  private accountService: AccountService,
  private router: Router,
  public alertService: AlertService,
  ) { }


  ngOnInit() {
    this.validate = this.route.snapshot.paramMap.get('validate');
    this.formData = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(3)]],
      passwordAux: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

compare() {
  if (this.formData.controls['password'].value === this.formData.controls['passwordAux'].value){
    return true;
  } else {
    return false;
  }
}

  public getError(controlName: string): string {
    let errorMessage = null;
    const control = this.formData.get(controlName);
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

  public changePassword() {
    let dataForm = {};
    const passwordSha256 = sha256(this.formData.controls['password'].value);
    dataForm['password'] = passwordSha256;
    dataForm['validate'] = this.validate;
    this.accountService.restorePassword(dataForm)
    .subscribe(
      (data) => { // Success
         if (data['status']) {
          this.alertService.success('Password cambiado con exito');
          this.router.navigate(["login"]);
         } else {
          this.alertService.danger('Fallo al cambiar el password');
         }
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
