import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { sha256, sha224 } from 'js-sha256';
import { LanguageService } from 'src/app/services/language.service';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  formData: FormGroup;
  submitted = false;
  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
    public languageService: LanguageService,
    public alertService: AlertService,
  ) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.user = this.auth.getUser();
    this.generateForm();
  }


  generateForm() {
    this.formData.controls['name'].setValue(this.user.name);
    this.formData.controls['lastName'].setValue(this.user.last_name);
    this.formData.controls['phone'].setValue(this.user.phone);
    this.formData.controls['address'].setValue(this.user.address);
  }



  update() {
    let dataForm = this.formData.value;
    dataForm["userId"] = this.user.user_id;
    this.userService.updateUser(dataForm).subscribe(
      (data) => { // Success
        if (data['status']) {
          this.alertService.success('Actualizacion correcta');
        } else {
          this.alertService.danger('Error al actualizar');
        }
      },
      (error) => {
        console.error(error);
      }
    );

  }


}
