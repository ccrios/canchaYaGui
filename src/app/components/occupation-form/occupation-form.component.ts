import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-occupation-form',
  templateUrl: './occupation-form.component.html',
  styleUrls: ['./occupation-form.component.scss']
})
export class OccupationFormComponent implements OnInit {

  public occupationForm: FormGroup;
  @Input() id: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.occupationForm = this.formBuilder.group({
      description: ['', Validators.required],
      reservation_type: ['', Validators.required],
      reservation_status: ['', Validators.required],
      team1_id: [0, Validators.required],
      team2_id: [0, Validators.required],
      game_type: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      occupation_type: ['', Validators.required],
      stage_id: [this.id]
    });
  }


}
