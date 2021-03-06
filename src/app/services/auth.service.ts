
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
    localStorage.setItem('account_id' , data['Account']['Account']['account_id']);
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
    localStorage.removeItem('token');
    localStorage.removeItem('account_id');
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

  getAdmin() {
    const out = this.getInfo();
    return out.administrator[0].account_id;

  }

  getUser() {
    const out = this.getInfo();
    return out.user[0];

  }
}
