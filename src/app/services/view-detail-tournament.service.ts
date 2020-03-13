import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewDetailTournamentService {
  private configService: ConfigService;
  constructor(private Http: HttpClient) {
    this.configService = new ConfigService();
  }
  viewDetailTournament(data) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
    return this.Http.post(this.configService.serverIp.concat('/apiViewDetailTournament'), data, {headers});
    }
    verifyEmail(data){
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
      });
      return this.Http.post(this.configService.serverIp.concat('/verifyEmailRegisterTournament'), data, {headers});
    }
    createNewUser(data){
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
      });
      return this.Http.post(this.configService.serverIp.concat('/registerUser'), data, {headers});
    }

    registerNewTournamentParticipant(data){
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
      });
      return this.Http.post(this.configService.serverIp.concat('/registerNewTournamentParticipant'), data, {headers});
    }
}
