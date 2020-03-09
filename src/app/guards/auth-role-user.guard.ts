import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRoleUserGuard implements CanActivateChild {
  constructor(private auth: AuthService,
              private myRoute: Router) {
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (this.auth.getRol() === 1) {
      //   return true;
      // } else {
      //   this.myRoute.navigate(["admin"]);
      //   return false;
      // }
      return true;
  }

}
