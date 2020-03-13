import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  configService: ConfigService;

  constructor(public http: HttpClient) {
    this.configService = new ConfigService();
  }


  postRegister(data) {
    const headers = new HttpHeaders({
        'Content-Type':  'application/json',
      });
    return this.http.post(this.configService.serverIp.concat('/regiterUser'), data, {headers} );
  }
}
