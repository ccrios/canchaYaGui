import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { sha256, sha224 } from 'js-sha256';
import { AlertService } from 'ngx-alerts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-request-password-change',
  templateUrl: './request-password-change.component.html',
  styleUrls: ['./request-password-change.component.scss']
})
export class RequestPasswordChangeComponent implements OnInit {


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
    this.formData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
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
    let dataForm = this.formData.value;
    this.accountService.requestChangePassword(dataForm)
    .subscribe(
      (data) => { // Success
         if (data['status']) {
          this.alertService.success('Solicitud recibida revisa tu correo');
          this.router.navigate(["login"]);
         } else {
          this.alertService.danger('Fallo la solicitud');
         }
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
