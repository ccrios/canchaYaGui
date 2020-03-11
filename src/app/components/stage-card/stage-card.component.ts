import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Form, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-stage-card',
  templateUrl: './stage-card.component.html',
  styleUrls: ['./stage-card.component.scss']
})
export class StageCardComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() width: number;
  @Input() heigth: number;
  @Input() id: number;

  closeResult: string;
  stageForm: FormGroup;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private stageService: StageService) {
  }

  ngOnInit() {
  }

  editStage() {
    if (this.id !== undefined) {
      this.router.navigate(['/edit-stage/' + this.id]);
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  viewSchedule() {
    if (this.id !== undefined) {

      console.log(`/schedule/${this.id}`);
      this.router.navigate([`/schedule/${this.id}`]);
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getStage(stageId, content) {
    this.initForm();

    console.log(stageId);

    this.stageService.getStage(stageId).subscribe(result => {

      console.log(result);

      if (result['status']) {
        this.loadStage(result['stage'], content);
      }
    });
  }

  deleteStage() {
    this.stageService.deleteStage(this.id).subscribe(res => {
      if (res['status']) {
        window.location.reload();
      }
    });
  }

  loadStage(stage: any, content) {
    this.stageForm.controls['name'].setValue(stage.name);
    this.stageForm.controls['descripcion'].setValue(stage.descripcion);
    this.stageForm.controls['width'].setValue(stage.width);
    this.stageForm.controls['heigth'].setValue(stage.heigth);
    this.stageForm.controls['stageType'].setValue(stage.stage_type_id.toString());
    this.open(content);
  }


  initForm() {
    this.stageForm = this.formBuilder.group({
      name: [{ value: '', disabled: true }, Validators.required],
      descripcion: [{ value: '', disabled: true }, Validators.required],
      width: [{ value: '', disabled: true }, Validators.required],
      heigth: [{ value: '', disabled: true }, Validators.required],
      stageType: [{ value: '', disabled: true }, Validators.required]
    });
  }

}
