import { Component, OnInit } from '@angular/core';
import {personal} from '../../models/personal';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ObtenerPersonal(item: personal): void{ this.updatePersonal = item; }

  listPersonal:any = [{personal:0,nombre:'maria',apellido:'guarez'},
  {personal:1,nombre:'jose',apellido:'fernandez'}];

  updatePersonal: personal = {
    personal:0,
    nombre:'',
    apellido:'',
    direccion:'',
    telefono:0,
    estado:1,
    personal_tipo_personal:1,
    personal_escuela:1,
    usuario:'',
    contrasenia:''
  }
}
