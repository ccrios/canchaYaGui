import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  configService: ConfigService;

  constructor(public http: HttpClient, private auth: AuthService) {
    this.configService = new ConfigService();

  }

  updateUser(data) {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post(this.configService.serverIp.concat('/UpdateUser'), data, {headers} );

  }

}
