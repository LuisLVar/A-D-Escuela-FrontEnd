import { Component, OnInit } from '@angular/core';
import { AsigMateriaService } from '../../services/asigMaterias/asig-materia.service'
import { GradoService } from '../../services/grados/grado.service'
import { AsigMateria } from '../../models/asig_materia'
import { Materia } from '../../models/materia'
import { Grado } from '../../models/grado.interface'

@Component({
  selector: 'app-asig-materia',
  templateUrl: './asig-materia.component.html',
  styleUrls: ['./asig-materia.component.css']
})
export class AsigMateriaComponent implements OnInit {

  materias:any[];
  grados:any[];
  datosAsig: AsigMateria={materia:0, grado: 0};
  gradito:Grado = {grado:0, nombre_grado:''}
  materita:Materia = {materia:0, contenido:'', nombre: ''}

  constructor(private _asig:AsigMateriaService,private _grado:GradoService) { }
  ngOnInit(): void {}
  ObtenerAsig(materia:number, grado:number){ this.datosAsig = {materia:materia,grado: grado} }

  deleteAsig(){
    this._asig.deleteAsigMateria(this.datosAsig.grado)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  CreateAsig(){}

  Establecer_Valores(){
    this.datosAsig.materia=0;
    this.datosAsig.grado=0;
  }
}
