import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router:Router) { }

  ingresar = (user:any) => this.http.post('http://3.20.3.133:3010/api/login',user);

  get isLogIn() {
    return this.logIn.asObservable(); // {2}
  }

  ingrese(user:any){ 
    localStorage.setItem('usuario', JSON.stringify(user));
    this.logIn.next(true); 
    this.router.navigate(['/ciclos']);
  }

  loggedIn = () => !!localStorage.getItem('usuario');

  logout = () =>{
    localStorage.removeItem('usuario');
    this.logIn.next(false);
    this.router.navigate(['/portada']);
  }

}
