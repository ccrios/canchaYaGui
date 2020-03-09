import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  configService: ConfigService;

  constructor(public http: HttpClient) {
    this.configService = new ConfigService();
  }


  postLogin(data) {
    const headers = new HttpHeaders({
        'Content-Type':  'application/json',
      });
    return this.http.post(this.configService .serverIp.concat('/login'), data, {headers} );
  }
}
