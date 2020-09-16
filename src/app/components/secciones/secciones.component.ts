import { Component, OnInit, NgZone } from '@angular/core';
import { Seccion } from '../../models/Seccion';
import { SeccionesService } from '../../services/secciones.service';
import { CicloEscolarService } from '../../services/ciclo_escolar/ciclo-escolar.service'
import { Ciclo } from '../../models/ciclo-escolar.interface';
import { Grado } from 'src/app/models/grado.interface';
import {GradoService} from '../../services/grados/grado.service';
import {personal} from '../../models/personal';
import {PersonalService} from '../../services/personal/personal.service';
@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  constructor(
    private _ciclo: CicloEscolarService,
    private _seccion: SeccionesService,
    private zone: NgZone,
    private gradoService: GradoService,
    private _personal:PersonalService
  ) { }
  ngOnInit(): void {
    this.Listar_Secciones();
  }
  reloadPage() { // click handler or similar
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
}

  ObtenerSeccion(item: any): void { 
    this.updateSeccion.nombre = item.nombre;
    this.updateSeccion.ciclo = item.seccion_ciclo;
    this.updateSeccion.grado = item.seccion_grado;
    this.updateSeccion.personal = item.seccion_personal;
    this.updateSeccion.seccion= item.seccion;
    this.updateSeccion.estado= item.estado;
  }

  listaConsulta:any=[];
  listSecciones: any = [];
  resultadoCiclo: any = [];
  resultadoPersonal: any = [];//[{ personal: 1, nombre: "Juan", apellido: "Godinez" }, { personal: 2, nombre: "Marta", apellido: "de León" }];
  resultadoGrado: any = [];//[{ grado: 1, nombre_grado: "Primero Primaria" }, { grado: 2, nombre_grado: "Segundo Primaria" }]

  newSeccion: Seccion = {
    seccion: 0,
    nombre: '',
    estado: 1,
    grado: 1,
    personal: 1,
    ciclo: 1
  };

  updateSeccion: Seccion = {
    seccion:0,
    nombre: '',
    estado: 1,
    grado: 1,
    personal: 1,
    ciclo: 1
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
        
      },
      err => console.log(err)
    );
  }

  Listar_Personal():void{
   this._personal.getPersonal().subscribe(
     res => {
       this.resultadoPersonal = res;
     },
     err => console.log(err)
   );
 }
 Listar_Grados(): void {
  this.gradoService.getGrados().subscribe(
    res => {
      this.resultadoGrado = res;
      this.lista_Final();
      console.log(res);
    },
    err => {
      console.log(err);
    }
  )
}

  CreateSeccion(): void {
    console.log(this.newSeccion);
    //delete this.newSeccion.seccion;

    this._seccion.saveSeccion(this.newSeccion)
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
    this.newSeccion.ciclo = 1;
    this.newSeccion.nombre = '';
    this.newSeccion.grado = 1;
    this.newSeccion.personal = 1;
    this.updateSeccion.nombre = '';
    this.updateSeccion.ciclo = 1;
    this.updateSeccion.grado = 1;
    this.updateSeccion.personal = 1;
  }

  UpdateSeccion(): void {
    console.log("up");
    const id = this.updateSeccion.seccion;
    //delete this.updateSeccion.seccion;
    this._seccion.updateSeccion(this.updateSeccion)
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

  DeleteSeccion(): void {
    console.log("delete");
    this._seccion.deleteSeccion(this.updateSeccion.seccion)
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
  getGrado(val: any) {
    console.log("grado" + val);
    this.updateSeccion.grado = val;
  }
  getCiclo(val: any) {
    console.log("ciclo" + val);
    this.updateSeccion.ciclo = val;
  }
  getPersonal(val: any) {
    console.log("personal" + val);
    this.updateSeccion.personal = val;
  }
  getGradoN(val: any) {
    console.log("grado" + val);
    this.newSeccion.grado = Number(val);
  }
  getCicloN(val: any) {
    console.log("cicloN" + val);
    this.newSeccion.ciclo = Number(val);
  }
  getPersonalN(val: any) {
    console.log("personal" + val);
    this.newSeccion.personal = Number(val);
  }
}
