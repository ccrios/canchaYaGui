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
    return this.http.get(`${this.configService.serverIp}/occupation/${id.toString()}`, { headers });
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
    return this.http.post(`${this.configService.serverIp}/occupation`, data, { headers });
  }

  public updateOccupation(occupationID: number, form: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      form
    };
    return this.http.put(`${this.configService.serverIp}/occupation/${occupationID.toString()}`, data, { headers });
  }

  public deleteOccupation(occupationID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(`${this.configService.serverIp}/occupation/${occupationID.toString()}`, { headers });
  }
}
