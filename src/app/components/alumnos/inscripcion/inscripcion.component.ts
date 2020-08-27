import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumnos'
import { AlumnosInscripService } from '../../../services/inscripcion/alumnos-inscrip.service'

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  // Objeto Materia, Ayuda a crear
  newAlumno: Alumno = {
    alumno: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: 0,
    id_alumno: '',
    encargado: '',
    fecha_nacimiento:null,
    estado: ''
  };
  // Objeto Materia, Ayuda a eliminar y actualizar
  updateAlumno: Alumno= {
    alumno: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: 0,
    id_alumno: '',
    encargado: '',
    fecha_nacimiento:null,
    estado: ''
  };
  // Lista de objetos materia, Ayuda a listar las materias obtenidas del servidor
  listMateria:any = [];

  constructor(private _alumno: AlumnosInscripService) { }
  ngOnInit(): void { }
  ObtenerMateria(item: Alumno): void{ this.updateAlumno = item; }

  Listar_Alumnos():void{
    this._alumno.getAlumnos().subscribe(
      res => {
        console.log(this.listMateria)
        this.listMateria = res;
      },
      err => console.log(err)
    );
  }

  CreateAlumno():void {
    delete this.newAlumno.alumno;
    this._alumno.saveAlumno(this.newAlumno)
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
    this.newAlumno.alumno=0;
    this.newAlumno.nombre='';
    this.newAlumno.apellido='';
    this.newAlumno.direccion='';
    this.newAlumno.telefono=0;
    this.newAlumno.id_alumno='';
    this.newAlumno.encargado='';
    this.newAlumno.fecha_nacimiento=null;
    this.newAlumno.estado='';

    this.updateAlumno.alumno=0;
    this.updateAlumno.nombre='';
    this.updateAlumno.apellido='';
    this.updateAlumno.direccion='';
    this.updateAlumno.telefono=0;
    this.updateAlumno.id_alumno='';
    this.updateAlumno.encargado='';
    this.updateAlumno.fecha_nacimiento=null;
    this.updateAlumno.estado='';
  }

  UpdateAlumno():void {
    const id = this.updateAlumno.alumno;
    delete this.updateAlumno.alumno;
    this._alumno.updateAlumno(id, this.updateAlumno)
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

  DeleteAlumno(): void{
    this._alumno.deleteAlumno(this.updateAlumno.alumno)
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
}
