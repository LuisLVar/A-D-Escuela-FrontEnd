import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../models/Seccion';
import { SeccionesService } from '../../services/secciones.service';
//import {CicloEscolarService} from '../../services/ciclo_escolar/ciclo-escolar.service';
//grados
//personal
@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {
  
  constructor(
    //private _ciclo:CicloEscolarService,
    private _seccion:SeccionesService
    ) 
    { }
  ngOnInit(): void { }

  ObtenerSeccion(item: Seccion): void{ this.updateSeccion = item; }

  //para probar
  listSecciones:any = [{seccion:0,nombre:'1A',estado:'1',grado:1,personal:1, ciclo:2019},
                        {seccion:0,nombre:'1B',estado:'1',grado:1,personal:1, ciclo:2019}];
  resultadoCiclo: any =[{id:0,ciclo:2019},{id:0,ciclo:2020}]

  newSeccion: Seccion = {
    seccion:0,
    nombre: '',
    estado:'1',
    grado:0,
    personal:1,
    ciclo:0
  };

  updateSeccion: Seccion = {
    nombre: '',
    estado:'1',
    grado:0,
    personal:1,
    ciclo:0
  };



  Listar_Secciones():void{
    this._seccion.getSecciones().subscribe(
      res => {
        this.listSecciones = res;
      },
      err => console.log(err)
    );
  }

  /*Listar_Ciclos():void{
    this._ciclo.getCiclos().subscribe(
      res => {
        this.resultadoCiclo = res;
      },
      err => console.log(err)
    );
  }*/

  CreateSeccion():void {
    console.log(this.newSeccion);
    delete this.newSeccion.seccion;

   this._seccion.saveSeccion(this.newSeccion)
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

  Establecer_Valores(): void{
    this.newSeccion.ciclo=0;
    this.newSeccion.nombre='';
    this.newSeccion.grado=0;
    this.newSeccion.personal=1;
    this.updateSeccion.nombre='';
    this.updateSeccion.ciclo=0;
    this.updateSeccion.grado=0;
    this.updateSeccion.personal=1;
  }

  UpdateSeccion():void {
    console.log("up");
    const id = this.updateSeccion.seccion;
    delete this.updateSeccion.seccion;
    this._seccion.updateSeccion(id, this.updateSeccion)
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

  DeleteSeccion(): void{
    console.log("delete");
    this._seccion.deleteSeccion(this.updateSeccion.seccion)
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
  mientras(val:any){
    console.log("venas"+ val);
  }
}
