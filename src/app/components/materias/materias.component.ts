import { Component, OnInit } from '@angular/core';
import { Materia } from '../../models/materia'
import { MateriaService } from '../../services/materias/materia.service'
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  // Objeto Materia, Ayuda a crear
  newMateria: Materia = {
    materia: 0,
    nombre: '',
    contenido: ''
  };
  // Objeto Materia, Ayuda a eliminar y actualizar
  updateMateria: Materia = {
    materia: 0,
    nombre: '',
    contenido: ''
  };
  // Lista de objetos materia, Ayuda a listar las materias obtenidas del servidor
  listMateria:any = [];

  constructor(private _material:MateriaService) { }
  ngOnInit(): void { this.Listar_Materias() }
  ObtenerMateria(item: Materia): void{ this.updateMateria = item; }

  Listar_Materias():void{
    this._material.getMaterias().subscribe(
      res => {
        console.log(this.listMateria)
        this.listMateria = res;
      },
      err => console.log(err)
    );
  }

  CreateMateria():void {
    delete this.newMateria.materia;
    console.log(this.newMateria)
    this._material.saveMateria(this.newMateria).subscribe(
      res => {
        console.log(res);
        this.Establecer_Valores();
      },
      err => {
          console.log(err);
      }
    );
  }

  Establecer_Valores(): void{
    this.newMateria.materia=0;
    this.newMateria.nombre='';
    this.newMateria.contenido='';
    this.updateMateria.materia=0;
    this.updateMateria.nombre='';
    this.updateMateria.contenido='';
  }

  UpdateMaterial():void {
    this._material.updateMateria(this.updateMateria).subscribe(
      res => {
        console.log(res);
        this.Establecer_Valores();
      },
      err => {
        console.log(err);
      }
    );
  }

  DeleteMateria(): void{
    this._material.deleteMateria(this.updateMateria.materia)
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
