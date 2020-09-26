import { Component, OnInit } from '@angular/core';
import { AlumnosInscripService } from '../../services/inscripcion/alumnos-inscrip.service'
import { SeccionesService } from '../../services/secciones.service';
import { InscripAlumService } from '../../services/alumn-inscrip/inscripalum.service'
import { InscripAlumno  } from '../../models/inscrip-alumnos'

@Component({
  selector: 'app-inscripcion-alumno',
  templateUrl: './inscripcion-alumno.component.html',
  styleUrls: ['./inscripcion-alumno.component.css']
})
export class InscripcionAlumnoComponent implements OnInit {

  alumnos: any = [];
  secciones: any = [];
  inscripciones: any = [];
  idAlumno:number = 0;
  idSeccion:number = 0;
  newInscripcion: InscripAlumno = {
    fecha: '',
    inscripcion_alumno: 0,
    inscripcion_seccion: 0
  };

  constructor(
    private _alumno: AlumnosInscripService,
    private _seccion: SeccionesService,
    private _inscrip: InscripAlumService) { }

  ngOnInit(): void {
    this.getAlumnos();
    this.getSecciones();
    this.getInscripciones();
  }

  getAlumnos():void{
    this._alumno.getAlumnos().subscribe(
      res => this.alumnos= res,
      err => console.log(err)
    );
  }

  getSecciones(): void {
    this._seccion.getSecciones().subscribe(
      res => this.secciones = res,
      err => console.log(err)
    );
  }

  getInscripciones():void{
    this._inscrip.getInscripAlumnos().subscribe(
      res => this.inscripciones= res,
      err => console.log(err)
    );
  }

  saveInscripcion(){
    this._inscrip.saveInscripAlumno(this.newInscripcion).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
