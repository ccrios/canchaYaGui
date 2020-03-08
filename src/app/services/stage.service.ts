import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  configService: ConfigService;

  constructor(public http: HttpClient) {
    this.configService = new ConfigService();
  }

  public listStages() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const params = new HttpParams().set('accountID', localStorage.getItem('account_id'));
    return this.http.get(this.configService.serverIp.concat('/stages'), { headers, params });
  }

  public getStage(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const params = new HttpParams().
      set('accountID', localStorage.getItem('account_id'));
    return this.http.get(this.configService.serverIp.concat('/stage/').concat(id.toString()), { headers, params });
  }
}
