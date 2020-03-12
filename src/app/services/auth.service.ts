import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private myRoute: Router) { }
  sendInfo(data) {
    localStorage.setItem('account', JSON.stringify(data['Account']['Account']));
    localStorage.setItem('token', JSON.stringify(data['Account']['token']));
  }

  getInfo() {
    return JSON.parse(localStorage.getItem('account'));
  }



  getToken() {
    return localStorage.getItem('token');
  }
  isLoggednIn() {
    return (this.getInfo() !== null);
  }
  logout() {
    localStorage.removeItem('account');
    this.myRoute.navigate(["login"]);
  }

  getRol() {
    const out = this.getInfo();
    return out.role;
  }


  getname() {
    const out = this.getInfo();
    if (out.role === 1) {
      return out.administrator[0].name;
    } else {
      return out.user[0].name;
    }

  }
}
