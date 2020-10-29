import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:string = ""
  pass:string = ""

  constructor(private _user:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    if(this.correo !== "" && this.pass!==""){
      /*this._user.ingresar({corre:this.correo,password:this.pass}).subscribe(
        res => {
          localStorage.setItem('usuario', JSON.stringify(res));
          this.router.navigate(['/ciclos']);
        },
        err => console.error(err)
      )*/
      this._user.ingrese({user:"chay",password: "123"});
    }else{
      alert("Los campos son obligatorios")
    }
  }
}
