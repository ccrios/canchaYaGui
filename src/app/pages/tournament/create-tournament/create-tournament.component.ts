import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { CreateTournamentService } from 'src/app/services/create-tournament.service';


@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {
  formCreateTournament: FormGroup;
  teamsOptions: any = [4, 8, 16, 32];
  constructor(
    private formBuilder: FormBuilder,
    private createTournamentService: CreateTournamentService,
    public dialogRef: MatDialogRef<CreateTournamentComponent>
    ) {}


  ngOnInit() {
    this.formCreateTournament = this.formBuilder.group({
      tournamentName: ['', [Validators.required, Validators.minLength(5)]],
      quantityTeam: ['', [Validators.required]],
      registrationPayment: ['', [Validators.required, Validators.min(5000)]],
      tournamentPrize: ['', [Validators.required, Validators.min(20000)]],
      initDate: ['', Validators.required],
      administratorId : 1,
    });
  }
  createTournament() {

    this.createTournamentService.createTournament(this.formCreateTournament.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
    this.closeModal();
  }
  closeModal() {
    this.dialogRef.close();
  }
}

