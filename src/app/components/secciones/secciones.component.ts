import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../models/Seccion';
import { SeccionesService } from '../../services/secciones.service';
import { CicloEscolarService } from '../../services/ciclo_escolar/ciclo-escolar.service'
//import { Ciclo } from '../../models/ciclo-escolar.interface';
//import { Grado } from 'src/app/models/grado.interface';
//import {GradoService} from '../../../services/grados/grado.service';
//import {personal} from '../../models/personal';
@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  constructor(
    private _ciclo: CicloEscolarService,
    private _seccion: SeccionesService
    //private gradoService: GradoService
  ) { }
  ngOnInit(): void {
    //this.Listar_Secciones();
  }

  ObtenerSeccion(item: Seccion): void { this.updateSeccion = item; }

  listaConsulta:any=[];
  //listSecciones: any = [];
  listSecciones:any = [{seccion:0,nombre:'1A',estado:'1',seccion_grado:1,seccion_personal:1, seccion_ciclo:2019},
                        {seccion:1,nombre:'1B',estado:'1',seccion_grado:1,seccion_personal:1, seccion_ciclo:2019}];
  resultadoCiclo: any =[{ciclo:0,anio:2019},{ciclo:1,anio:2020}]
  //resultadoCiclo: any = [];
  resultadoPersonal: any = [{ personal: 0, nombre: "Juan", apellido: "Godinez" }, { personal: 1, nombre: "Marta", apellido: "de León" }];
  resultadoGrado: any = [{ grado: 1, nombre_grado: "Primero Primaria" }, { grado: 2, nombre_grado: "Segundo Primaria" }]

  newSeccion: Seccion = {
    seccion: 0,
    nombre: '',
    estado: '1',
    seccion_grado: 0,
    seccion_personal: 1,
    seccion_ciclo: 0
  };

  updateSeccion: Seccion = {
    nombre: '',
    estado: '1',
    seccion_grado: 0,
    seccion_personal: 1,
    seccion_ciclo: 0
  };
  lista_Final() {
    console.log("entro");
    for (let index in this.listaConsulta) {
      let seccion = this.listaConsulta[index];
      for (let j in this.resultadoCiclo) {
        let ciclo=this.resultadoCiclo[j];
        if (seccion.seccion_ciclo == ciclo.ciclo) {
            seccion.seccion_ciclo=ciclo.anio;
        }
      }
      ///grado
      //personal
      this.listSecciones.push(seccion);
      console.log(seccion);
    }
  }
  Listar_Secciones(): void {
    this._seccion.getSecciones().subscribe(
      res => {
        this.listaConsulta = res;
        this.Listar_Ciclos();
        
      },
      err => console.log(err)
    );
  }

  Listar_Ciclos(): void {
    this._ciclo.getCiclos().subscribe(
      res => {
        this.resultadoCiclo = res;
        this.lista_Final();
      },
      err => console.log(err)
    );
  }

  /*Listar_Personal():void{
   this._personal.getPersonal().subscribe(
     res => {
       this.resultadoPersonal = res;
     },
     err => console.log(err)
   );
 }*/
 /*Listar_Grados(): void {
  this.gradoService.getGrados().subscribe(
    res => {
      this.listaGrado = res;
      console.log(res);
    },
    err => {
      console.log(err);
    }
  )
}*/

  CreateSeccion(): void {
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

  Establecer_Valores(): void {
    this.newSeccion.seccion_ciclo = 0;
    this.newSeccion.nombre = '';
    this.newSeccion.seccion_grado = 0;
    this.newSeccion.seccion_personal = 1;
    this.updateSeccion.nombre = '';
    this.updateSeccion.seccion_ciclo = 0;
    this.updateSeccion.seccion_grado = 0;
    this.updateSeccion.seccion_personal = 1;
  }

  UpdateSeccion(): void {
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

  DeleteSeccion(): void {
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
  getGrado(val: any) {
    console.log("grado" + val);
    this.updateSeccion.seccion_grado = val;
  }
  getCiclo(val: any) {
    console.log("ciclo" + val);
    this.updateSeccion.seccion_ciclo = val;
  }
  getPersonal(val: any) {
    console.log("personal" + val);
    this.updateSeccion.seccion_personal = val;
  }
}
