import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class SportSpaceService {
  configService: ConfigService;

  constructor(public http: HttpClient, private auth: AuthService) {
    this.configService = new ConfigService();

  }

  getSportSpace() {
    const account = this.auth.getInfo();
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.get(this.configService.serverIp.concat('/sportSpaceByAdmin?id=' + account.account_id),{headers} );
  }

  updateSportSpace(data) {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post(this.configService.serverIp.concat('/UpdateSportSpace'), data, {headers} );

  }

}
