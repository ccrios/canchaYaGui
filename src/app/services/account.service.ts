import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  configService: ConfigService;

  constructor(public http: HttpClient) {
    this.configService = new ConfigService();
  }


  restorePassword(data) {
    const headers = new HttpHeaders({
        'Content-Type':  'application/json',
      });
    return this.http.post(this.configService.serverIp.concat('/chamgePassword'), data, {headers} );
  }

  requestChangePassword(data) {
    const headers = new HttpHeaders({
        'Content-Type':  'application/json',
      });
    return this.http.post(this.configService.serverIp.concat('/RestorePasword'), data, {headers} );
  }
}
