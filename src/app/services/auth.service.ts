import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
  constructor(private myRoute: Router) { }
  sendInfo(data) {
    localStorage.setItem('info_user' , JSON.stringify(data[ 'user' ]));
  }
  getInfo() {
    return localStorage.getItem('info_user');
  }
  isLoggednIn() {
    return (this.getInfo() !== null);
  }
  logout() {
    localStorage.removeItem('info_user');
    this.myRoute.navigate(["login"]);
  }

  getRol() {
   const out = JSON.parse(this.getInfo());
   return out.user.role;
  }
}
