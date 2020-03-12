import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StageService } from 'src/app/services/stage.service';
import { Route } from '@angular/compiler/src/core';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-stages-form',
  templateUrl: './stages-form.component.html',
  styleUrls: ['./stages-form.component.scss']
})
export class StagesFormComponent implements OnInit {
  public stageForm: FormGroup;
  title = 'Crear Cancha';
  btnText = 'Crear';
  id: any;
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private stageService: StageService,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.initForm();
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      if (this.id !== undefined) {
        this.title = 'Editar Cancha';
        this.btnText = 'Editar';
        this.getStage(this.id);
      }
    });
  }

  getStage(stageId) {
    console.log('entre a get');
    this.stageService.getStage(stageId).subscribe(result => {
      if (result['status']) {
        console.log(result['stage']);
        this.loadStage(result['stage']);
      }
    });
  }

  loadStage(stage: any) {
    this.stageForm.controls['name'].setValue(stage.name);
    this.stageForm.controls['descripcion'].setValue(stage.descripcion);
    this.stageForm.controls['width'].setValue(stage.width);
    this.stageForm.controls['heigth'].setValue(stage.heigth);
    this.stageForm.controls['stageType'].setValue(stage.stage_type_id.toString());
  }


  initForm() {
    this.stageForm = this.formBuilder.group({
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      width: ['', Validators.required],
      heigth: ['', Validators.required],
      stageType: ['', Validators.required]
    });
  }

  createStage() {
    console.log('entre a crear');
    this.stageService.createStage(this.stageForm.value).subscribe(res => {
      if (res['status']) {
        this.alert.success('Cancha creada exitosamente!!!');
        this.router.navigate(['/list-stages']);
      } else {
        this.alert.danger('Error al crear cancha!!!');
      }
    });
  }

  sendStage() {
    this.id === undefined ? this.createStage() : this.editStage();
  }

  editStage() {
    this.stageService.updateStage(this.id, this.stageForm.value).subscribe(res => {
      if (res['status']) {
        this.alert.success('Cancha editada exitosamente!!!');
        this.router.navigate(['/list-stages']);
      } else {
        this.alert.danger('Error al editar cancha!!!');
      }
    });
  }

  uploadImage(event: any) {
    const file = (event.target as HTMLInputElement).files[0];
    this.stageForm.controls.imagePath.setValue(file);
  }


}
