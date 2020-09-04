import { Component, OnInit, NgZone } from '@angular/core';
import { personal } from '../../models/personal';
import { PersonalService } from '../../services/personal/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private _personal: PersonalService,
    private zone: NgZone) { }

  ngOnInit(): void {
  }
  reloadPage() { // click handler or similar
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }
  ObtenerPersonal(item: personal): void { this.updatePersonal = item; }

  listPersonal: any = [{ personal: 1, nombre: 'maria', apellido: 'guarez' },
  { personal: 2, nombre: 'jose', apellido: 'fernandez' }];

  updatePersonal: personal = {
    personal: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '0',
    estado: 1,
    tipo_personal: 1,
    escuela: 1,
    personal_escuela: 1,
    usuario: '',
    contrasenia: ''
  }
  newPersonal: personal = {
    personal: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '0',
    estado: 1,
    tipo_personal: 1,
    escuela: 1,
    personal_escuela: 1,
    usuario: '',
    contrasenia: ''
  }
  

  CreatePersonal(): void {
    console.log(this.newPersonal);

    this._personal.savePersonal(this.newPersonal)
      .subscribe(
        res => {
          console.log(res);
          this.reloadPage();
        },
        err => {
          console.log(err);
        }
      );

    this.Establecer_Valores();
  }
  Establecer_Valores(): void {
    this.newPersonal.nombre = '';
    this.newPersonal.apellido = '';
    this.newPersonal.telefono = '';
    this.newPersonal.direccion = '';
    this.newPersonal.usuario = '';
    this.newPersonal.contrasenia = '';
    this.updatePersonal.nombre = '';
    this.updatePersonal.apellido = '';
    this.updatePersonal.telefono = '';
    this.updatePersonal.direccion = '';
    this.updatePersonal.usuario = '';
    this.updatePersonal.contrasenia = '';
  }

  UpdatePersonal(): void {
    console.log("up");
    const id = this.updatePersonal.personal;
    //delete this.updateSeccion.seccion;
    this._personal.updatePersonal(this.updatePersonal)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

    this.Establecer_Valores();
  }
  DeletePersonal(): void {
    console.log("delete");
    this._personal.deletePersonal(this.updatePersonal.personal)
      .subscribe(
        res => {
          console.log(res);
          this.reloadPage();
        },
        err => {
          console.log(err);
        }
      );

    this.Establecer_Valores();
  }

}
