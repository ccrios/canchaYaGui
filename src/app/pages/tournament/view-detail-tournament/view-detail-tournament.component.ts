import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ViewDetailTournamentService } from 'src/app/services/view-detail-tournament.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-view-detail-tournament',
  templateUrl: './view-detail-tournament.component.html',
  styleUrls: ['./view-detail-tournament.component.scss']
})
export class ViewDetailTournamentComponent implements OnInit {
  formVerifyEmail: FormGroup;
  formCreateNewUser: FormGroup;
  formTeamName: FormGroup;
  viewDetailTournament: any = [];
  infoPerson: any = [];
  isHidden: boolean = true;
  pagaRegistroTorneo: boolean = false;
  show: any = 1;
  container: any;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ViewDetailTournamentComponent>,
    private viewDetailTournamentService: ViewDetailTournamentService,
    @Inject(MAT_DIALOG_DATA) public data: {idTournaent: string }
  ) { }

  ngOnInit() {
    this.formTeamName = this.formBuilder.group({
      teamName: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.formVerifyEmail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.formCreateNewUser = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.min(5000)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      email:  ['', [Validators.required, Validators.email]]
    });

    let data = {
      idAdministrator : '1',
      idTournament: this.data.idTournaent
    };
    this.viewDetailTournamentService.viewDetailTournament(data).subscribe(
      (response) => {
        this.viewDetailTournament = response['tournament'].tournament['0'];
        console.log(this.viewDetailTournament);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  registrarParticipanteTorneo(){
    let f = new Date();
    let data ={
      teamName : this.formTeamName.value.teamName,
      userId : this.infoPerson.user_id,
      tournamentId : this.viewDetailTournament.tournament_id,
      payment: this.pagaRegistroTorneo,
      amountPayment: this.viewDetailTournament.registration_payment
    };

    this.viewDetailTournamentService.registerNewTournamentParticipant(data).subscribe(
      (response) => {
        alert('Usuario registrado');
        this.closeModal();
      },
      (error) => {
        alert('Error al registrar el nuevo participante, intentelo de nuevo');
        this.closeModal();
        console.error(error);
      }
    );
    console.log(data);
  }
  createNewUser(){
    this.viewDetailTournamentService.createNewUser(this.formCreateNewUser.value).subscribe(
      (response) => {
        console.log(response);
        this.show = 4;
      },
      (error) => {
        alert('Error al registrar el nuevo usuario, intentelo de nuevo');
        this.show = 3;
        console.error(error);
      }
    );
  }
  verifyEmail() {
    this.viewDetailTournamentService.verifyEmail(this.formVerifyEmail.value).subscribe(
      (response) => {
        if(response['status']){
          console.log(response);
          this.infoPerson = response['usuario'].person;
          this.infoPerson.email = response['usuario'].email;
          console.log(this.infoPerson);
          this.dialogRef.updateSize('700px', '85vh');
          this.show = 4;
        }else{
          this.dialogRef.updateSize('700px', '85vh');
          this.show = 3;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  abrirVistaRegistrarParticipante(){
    this.dialogRef.updateSize('500px', '35vh');
    this.show = 2;
  }
  returnToViesDetailTournament(){
    this.show = 1;
  }
  programarJuegoTorneo(){

  }

  closeModal() {
    this.dialogRef.close();
  }
}

