import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {

  configService: ConfigService;

  constructor(public http: HttpClient) {
    this.configService = new ConfigService();
  }

  public listOccupations(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this.configService.serverIp}/occupations/${id}`, { headers });
  }

  public getOccupation(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const params = new HttpParams().
      set('accountID', localStorage.getItem('account_id'));
    return this.http.get(`${this.configService.serverIp}/stage/${id.toString()}`, { headers, params });
  }

  public createOccupation(form: any) {
    console.log(form);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      accountID: localStorage.getItem('account_id'),
      form
    };
    return this.http.post(`${this.configService.serverIp}/create-occupation`, data, { headers });
  }

  public updateOccupation(stageId: number, form: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      form
    };
    return this.http.put(`${this.configService.serverIp}/update-stage/${stageId.toString()}`, data, { headers });
  }

  public deleteOccupation(stageId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(`${this.configService.serverIp}/delete-stage/${stageId.toString()}`, { headers });
  }
}
