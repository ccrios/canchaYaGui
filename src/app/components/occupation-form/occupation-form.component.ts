import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OccupationService } from 'src/app/services/occupation.service';
import { AlertService } from 'ngx-alerts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-occupation-form',
  templateUrl: './occupation-form.component.html',
  styleUrls: ['./occupation-form.component.scss']
})
export class OccupationFormComponent implements OnInit {

  public occupationForm: FormGroup;
  @Input() id: any;
  // @Output() sendForm = new EventEmitter();
  public idStage: any;
  public title = 'Crear Ocupación';
  public btnText = 'Crear';
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private occupationService: OccupationService,
    private alert: AlertService,
    private router: Router,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.initForm();
    this.validateParam();
  }

  validateParam() {
    this.activatedRoute.params.subscribe(params => {
      this.idStage = params.id;
      console.log(this.idStage);
      if (this.id !== undefined) {
        this.title = 'Editar Ocupación';
        this.btnText = 'Editar';
        this.loadOccupation();
      }
      this.occupationForm.controls.stage_id.setValue(this.idStage);
    });
  }

  initForm() {
    this.occupationForm = this.formBuilder.group({
      description: ['', Validators.required],
      reservation_type: ['ADMIN', Validators.required],
      reservation_status: ['ACTIVO', Validators.required],
      team1_id: [0, Validators.required],
      team2_id: [0, Validators.required],
      game_type: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      occupation_type: ['RSERV', Validators.required],
      stage_id: [this.idStage]
    });
  }

  sendOccupation() {
    // this.validateParam();
    this.id === undefined ? this.createOccupation() : this.editOccupation();
    window.location.reload();
  }

  createOccupation() {
    console.log('entre a crear');
    console.log(this.occupationForm.value);
    if (this.validateCreation()) {
      this.occupationService.createOccupation(this.occupationForm.value).subscribe(res => {
        if (res['status']) {
          this.router.navigate(['/schedule/', this.idStage]);
          // this.sendForm.emit({form: this.occupationForm.value});
        } else {
          this.alert.danger('Error al crear la ocupación!!!');
        }
      });
    } else {
      this.alert.danger('Creación inválida!!!');
    }
  }

  validateCreation(): boolean {
    const auxStart = new Date(this.occupationForm.controls.start.value);
    const auxEnd = new Date(this.occupationForm.controls.end.value);
    const currentDate = new Date();
    return currentDate <= auxStart && auxStart < auxEnd;
  }

  editOccupation() {
    this.occupationService.updateOccupation(this.id, this.occupationForm.value).subscribe(res => {
      if (res['status']) {
        this.alert.success('Ocupación editada exitosamente!!!');
        this.router.navigate(['/schedule/', this.idStage]);
      } else {
        this.alert.danger('Error al editar la ocupación!!!');
      }
    });
  }

  loadOccupation() {
    this.occupationService.getOccupation(this.id).subscribe(res => {
      if (res['status']) {
        const resOccupation = res['occupation'];
        this.occupationForm.controls.description.setValue(resOccupation.reservationInfo.description);
        this.occupationForm.controls.reservation_type.setValue(resOccupation.reservationInfo.reservation_type);
        this.occupationForm.controls.reservation_status.setValue(resOccupation.reservationInfo.reservation_status);
        this.occupationForm.controls.team1_id.setValue(resOccupation.game_id.team1_id);
        this.occupationForm.controls.team2_id.setValue(resOccupation.game_id.team2_id);
        this.occupationForm.controls.game_type.setValue(resOccupation.game_id.game_type);
        this.occupationForm.controls.start.setValue(resOccupation.start);
        this.occupationForm.controls.end.setValue(resOccupation.end);
        this.occupationForm.controls.occupation_type.setValue(resOccupation.occupation_type);
        console.log('antes de enviar a editar', this.occupationForm.value);
      } else {
        this.alert.danger('Error al obtener la ocupación a editar!!!');
      }
    });
  }

  closeModal() {
    this.modal.dismissAll();
  }


}
