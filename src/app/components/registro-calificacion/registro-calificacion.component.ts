import { Component, OnInit } from '@angular/core';
import { AnyNaptrRecord } from 'dns';
import { SeccionesService } from '../../services/secciones.service';
import {CalificacionService} from '../../services/calificacion/calificacion.service'
import {Alumno} from '../../models/alumnos';
import {Materia} from '../../models/materia';
@Component({
  selector: 'app-registro-calificacion',
  templateUrl: './registro-calificacion.component.html',
  styleUrls: ['./registro-calificacion.component.css']
})
export class RegistroCalificacionComponent implements OnInit {

  constructor(private _seccion: SeccionesService, private _calificacion:CalificacionService) { }
  personal:any;
  seccion:any;
  materias:any=[];
  //quemados para mientras
  alumnospeticiones:any=[];
  alumnos=[];
  alumno1:Alumno={}
  calificacion={seccion:-1,alumno:-1,materia:-1,bloque:-1};

  ngOnInit(): void {
    //por ahora quemado del login
    //se tiene que personal es
    this.personal = {personal:1,nombre:'Maritza'};
    //get seccion del profesor
    //this.getSeccion(this.personal.personal); 
    //seccion para mientras
    this.seccion={seccion:4};
    console.log(new Date().getFullYear());
    //materias
    this.getMaterias(this.seccion.seccion);

  }
  getSeccion(id:number): void {
    this._seccion.getSeccionPersonal(id,'2020').subscribe(//TODO
      res => {
        console.log(res);
        this.seccion=res;
        
      },
      err => console.log(err)
    );
  }
  getMaterias(id:number): void {
    this._calificacion.getMateriasSecc(id).subscribe(
      res => {
        console.log(res);
        this.materias=res;
        
      },
      err => console.log(err)
    );
  }
  change(){
    if(this.calificacion.alumno!=-1 && this.calificacion.materia!=-1 && this.calificacion.bloque!=-1 && this.calificacion.seccion!=-1){
      //hacer peticion
    }
  }




}
