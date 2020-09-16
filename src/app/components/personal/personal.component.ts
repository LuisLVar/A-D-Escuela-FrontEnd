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
    this.Listar_Personal();
  }
  reloadPage() { // click handler or similar
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }
  ObtenerPersonal(item: personal): void { this.updatePersonal = item; }

  listPersonal: any = [];

  updatePersonal: personal = {
    personal: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    estado: 1,
    cui:0,
    personal_escuela: 1,
    personal_tipo_personal: 1,
    usuario: '',
    contrasenia: ''
  }
  newPersonal: personal = {
    personal: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    estado: 1,
    cui:0,
    personal_escuela: 1,
    personal_tipo_personal: 1, 
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
    this.newPersonal.telefono = '';
    this.newPersonal.cui = 0;
    this.updatePersonal.nombre = '';
    this.updatePersonal.apellido = '';
    this.updatePersonal.telefono = '';
    this.updatePersonal.direccion = '';
    this.updatePersonal.usuario = '';
    this.updatePersonal.contrasenia = '';
    this.updatePersonal.telefono = '';
    this.updatePersonal.cui = 0;
  }

  UpdatePersonal(): void {
    console.log("up");
    const id = this.updatePersonal.personal;
    //delete this.updateSeccion.seccion;
    this._personal.updatePersonal(this.updatePersonal)
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

  Listar_Personal(): void {
    this._personal.getPersonal().subscribe(
      res => {
        this.listPersonal=res;
        
      },
      err => console.log(err)
    );
  }

}
