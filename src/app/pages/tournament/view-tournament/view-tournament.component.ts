import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTournamentComponent } from '../create-tournament/create-tournament.component';
import { ViewTournamentService } from 'src/app/services/view-tournament.service';
import {MatPaginator} from '@angular/material/paginator';
import { ViewDetailTournamentComponent } from '../view-detail-tournament/view-detail-tournament.component';

@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.component.html',
  styleUrls: ['./view-tournament.component.scss']
})
export class ViewTournamentComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginatorNoStarting: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginatorActive: MatPaginator;
  viewTournamentsNoStarting: any = [];
  viewTournamentsActive: any = [];
  // tslint:disable-next-line: max-line-length
  tournamentColumns: string[] = ['tournament_id', 'tournament_name', 'init_date', 'quantity_team', 'registration_payment', 'tournament_prize'];
  constructor(
    public matDialog: MatDialog,
    private viewTournamentService: ViewTournamentService
    ) { }

  ngOnInit() {
    this.viewTournamentsNoStarting.paginator = this.paginatorNoStarting;
    this.viewTournamentService.viewTournamentNoStarting(1).subscribe(
      (response) => {
        this.viewTournamentsNoStarting = response['tournamentNoStarting'].tournamentView;
      },
      (error) => {
        console.error(error);
      }
    );
    this.viewTournamentsActive.paginator = this.paginatorActive;
    this.viewTournamentService.viewTournamentActive(1).subscribe(
      (response) => {
        this.viewTournamentsActive = response['tournamentActive'].tournamentView;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  openModalCreateTournament(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "create-tournament-component";
    dialogConfig.height = "80vh";
    dialogConfig.width = '800px';
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(CreateTournamentComponent, dialogConfig);

  }
  openModalViewDetailTournament(id: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "view-detail-tournament-component";
    dialogConfig.height = "80vh";
    dialogConfig.width = '600px';
    dialogConfig.data = {idTournaent: id};

    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ViewDetailTournamentComponent, dialogConfig);

  }
}
