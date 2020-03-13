import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewTournamentService {
  private configService: ConfigService;
  constructor(private Http: HttpClient) {
    this.configService = new ConfigService();
  }

  viewTournamentNoStarting(idAdministrator) {
  return this.Http.get(this.configService.serverIp.concat('/apiViewTournamentNoStarting?id=' + idAdministrator));
  }
  viewTournamentActive(idAdministrator) {
    return this.Http.get(this.configService.serverIp.concat('/apiViewTournamentActive?id=' + idAdministrator));
    }
}
