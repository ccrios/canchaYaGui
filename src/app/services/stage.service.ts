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
    return this.http.get(`${this.configService.serverIp}/stages`, { headers, params });
  }

  public getStage(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const params = new HttpParams().
      set('accountID', localStorage.getItem('account_id'));
    return this.http.get(`${this.configService.serverIp}/stage/${id.toString()}`, { headers, params });
  }

  public createStage(form: any) {
    console.log(form);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      accountID: localStorage.getItem('account_id'),
      form
    };
    return this.http.post(`${this.configService.serverIp}/create-stage`, data, { headers });
  }

  public updateStage(stageId: number, form: any) {
    console.log(form);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      form
    };
    return this.http.put(`${this.configService.serverIp}/update-stage/${stageId.toString()}`, data, { headers });
  }

  public deleteStage(stageId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(`${this.configService.serverIp}/delete-stage/${stageId.toString()}`, { headers });
  }
}
