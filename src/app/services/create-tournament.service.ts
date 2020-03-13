import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateTournamentService {

  private configService: ConfigService;
  constructor(private Http: HttpClient) {
    this.configService = new ConfigService();
  }


  createTournament(data) {
  console.log(data);
  const headers = new HttpHeaders({
    'Content-type': 'application/json',
  });

  return this.Http.post(this.configService.serverIp.concat('/apiCreateTournament'), data, {headers});

  }
}
