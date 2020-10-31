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
      this._user.ingresar({user:this.correo,pwd:this.pass}).subscribe(
        (res:any[]) => {
          if(res.length > 0)
            this._user.ingrese(res)
          else
            alert('Correo o contraseña incorrecta')
        },
        err => console.error(err)
      )

    }else{
      alert("Los campos son obligatorios")
    }
  }
}
