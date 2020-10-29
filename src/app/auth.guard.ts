import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from "./services/login/login.service"

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private _user: LoginService,private router: Router) { }

  canActivate(): boolean {
    if (this._user.loggedIn())  return true;

    this.router.navigate(['/login']);
    return false;
  }
  
}
