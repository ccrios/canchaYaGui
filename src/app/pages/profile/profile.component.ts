import { Component, OnInit } from '@angular/core';
import { SportSpaceService } from 'src/app/services/sport-space.service';
import { AlertService } from 'ngx-alerts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { sha256, sha224 } from 'js-sha256';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  formData: FormGroup;
  dataAdmin: any;
  constructor(
    private sportSpaceService: SportSpaceService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      'name': ['', [Validators.required]],
      "lastName":  ['', Validators.required],
      "phone":  ['', Validators.required],

      "sportSpacenit":  [''],
      "sportSpaceaddres":  ['', Validators.required],
      "sportSpaceName":  ['', Validators.required],
    });

    this.getSportSpace();
  }

  generateForm(sportSpace) {
    this.formData.controls['name'].setValue(sportSpace.administrator.name);
    this.formData.controls['lastName'].setValue(sportSpace.administrator.last_name);
    this.formData.controls['phone'].setValue(sportSpace.administrator.phone);
    this.formData.controls['sportSpacenit'].setValue(sportSpace.sportSpace.nit);
    this.formData.controls['sportSpaceaddres'].setValue(sportSpace.sportSpace.address);
    this.formData.controls['sportSpaceName'].setValue(sportSpace.sportSpace.name);
  }

  getSportSpace() {
    this.sportSpaceService.getSportSpace().subscribe(
      (data) => { // Success
         if (data['status']) {
          this.dataAdmin = data;
          this.generateForm(data);
         } else {
          this.alertService.danger('No se encontro perfil');
         }
      },
      (error) => {
        console.error(error);
      }
    );
    }

    update(){
      let dataForm = this.formData.value;
      dataForm["adminId"] = this.dataAdmin.administrator.administrator_id;
      this.sportSpaceService.updateSportSpace(dataForm).subscribe(
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
