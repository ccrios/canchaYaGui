import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTournamentComponent } from '../create-tournament/create-tournament.component';
import { ViewTournamentService } from 'src/app/services/view-tournament.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.component.html',
  styleUrls: ['./view-tournament.component.scss']
})
export class ViewTournamentComponent implements OnInit {
  @ViewChild(MatPaginator, {static:true}) paginator : MatPaginator;
  viewTournaments: any = [];
  tournamentColumns: string[] = ['tournament_id', 'tournament_name', 'init_date', 'quantity_team', 'registration_payment', 'tournament_prize'];
  constructor(
    public matDialog: MatDialog,
    private viewTournamentService: ViewTournamentService
    ) { }

  ngOnInit() {
    this.viewTournaments.paginator = this.paginator;
    this.viewTournamentService.viewTournamentNoStarting(1).subscribe(
      (response) => {
        this.viewTournaments = response['tournamentNoStarting'].tournamentView;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  openModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "create-tournament-component";
    dialogConfig.height = "80vh";
    dialogConfig.width = '800px';
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(CreateTournamentComponent, dialogConfig);

  }

}
