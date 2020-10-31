import { Component, OnInit } from '@angular/core';
import { SeccionesService } from '../../services/secciones.service';
import {CalificacionService} from '../../services/calificacion/calificacion.service'
import {Alumno} from '../../models/alumnos';
import {Materia} from '../../models/materia';
import {Calificacion} from '../../models/calificacion';
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
  alumnospeticion:any=[];
  alumnos:Calificacion[]=[];
  calificacion={seccion:-1,materia:-1,bloque:-1};
  newCalificacion:Calificacion={
    alumno:0,
    nombre:'',
    apellido:'',
    cui:0,
    seccion:0,
    bloque:0,
    materia:0,
    zona:0,
    proyecto:0
  };
  newC:Calificacion={
    alumno:0,
    nombre:'',
    apellido:'',
    cui:0,
    seccion:0,
    bloque:0,
    materia:0,
    zona:0,
    proyecto:0
  };

  ngOnInit(): void {
    //por ahora quemado del login
    //se tiene que personal es
    this.personal = {personal:1,nombre:'Maritza'};
    //get seccion del profesor
    //this.getSeccion(this.personal.personal); 
    //seccion para mientras
    this.seccion={seccion:4};
    //materias
    this.getMaterias(this.seccion.seccion);
    this.calificacion.seccion=this.seccion.seccion; //para mientras


  }
  getSeccion(id:number): void {
    this._seccion.getSeccionPersonal(id,(new Date().getFullYear()).toString()).subscribe(//TODO
      res => {
        console.log(res);
        this.seccion=res;
        this.calificacion.seccion=this.seccion.seccion;
        
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
  getAlumnos(seccion:number, bloque:number){
    this._calificacion.getAlumnos(seccion,bloque).subscribe(
      res => {
        console.log(res);
        //this.alumnospeticion=res;//para mientras nel
        this.alumnospeticion=[{alumno:1,nombre:'victor fernando',apellido:'Lopez Morales',cui:'12334567'}
        ,{alumno:1,nombre:'victor fernando2',apellido:'Lopez Morales2',cui:'222212334567'}];
        for(let index in this.alumnospeticion){
          let newC:Calificacion={
            alumno:0,
            nombre:'',
            apellido:'',
            cui:0,
            seccion:0,
            bloque:0,
            materia:0,
            zona:0,
            proyecto:0
          };
          newC.alumno=this.alumnospeticion[index].alumno;
          newC.apellido=this.alumnospeticion[index].apellido;
          newC.nombre=this.alumnospeticion[index].nombre;
          newC.cui=this.alumnospeticion[index].cui;
          newC.seccion=this.calificacion.seccion;
          newC.materia=this.calificacion.materia;
          newC.zona=0;
          newC.proyecto=0;
          newC.bloque=this.calificacion.bloque;
          this.alumnos.push(newC);
        }
        //hacer los alumnos

        
      },
      err => console.log(err)
    );
  }
  change(){
    console.log(this.calificacion);
    if( this.calificacion.materia!=-1 && this.calificacion.bloque!=-1 && this.calificacion.seccion!=-1){
      //hacer peticion
      this.getAlumnos(this.calificacion.seccion,this.calificacion.bloque);
    }
  }
  sendCalificacion(){
    //poner el endpoint
    console.log('Enviando Califcacion');
    console.log(this.newCalificacion);
  }
  ObtenerAlumno(item:any){
    this.newCalificacion=item;
  }


}
