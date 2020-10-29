import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>; 
  logueado:boolean = false;

  constructor(private _user:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this._user.isLogIn;
    this.isLoggedIn$.subscribe(
      res => this.logueado=res
    )
  }

  salir(){
    this._user.logout();
  }

}
