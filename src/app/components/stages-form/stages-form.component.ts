import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stages-form',
  templateUrl: './stages-form.component.html',
  styleUrls: ['./stages-form.component.scss']
})
export class StagesFormComponent implements OnInit {

  editable: boolean;

  public stageForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    if (this.router.url === '/create-stage') {
      this.editable = false;
      this.createStage();
    } else if (this.router.url.includes('/edit-stage')) {
      this.editable = true;
      this.editStage();
    }
  }

  initForm() {
    this.stageForm = this.formBuilder.group({
      stage_id: ['', Validators.required],
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      width: ['', Validators.required],
      heigth: ['', Validators.required]
    });
  }

  createStage() {
    
  }

  editStage() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      console.log(id);
    });
    this.stageForm.controls.name.setValue('Se debe editar');
  }


}
