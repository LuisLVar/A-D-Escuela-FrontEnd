import { Component, OnInit } from '@angular/core';

import {CalificacionMateriaService} from '../../services/calificacion/calificacion-materia.service';
import {MateriaService} from '../../services/materias/materia.service';

@Component({
  selector: 'app-calificacion-por-materia',
  templateUrl: './calificacion-por-materia.component.html',
  styleUrls: ['./calificacion-por-materia.component.css']
})
export class CalificacionPorMateriaComponent implements OnInit {

  public buscar: any = {
    materia: '',
    seccion: 0,
    bloque: 0
  };
  public lista_materias: any = []

  //TODO LA SECCION TAL VEZ SE CAMBIE CONFORME AL USUARIO QUE ESTA LOGUEADO

  public list_resultados: any = [];

  constructor(private calificacionService: CalificacionMateriaService, private materiaService: MateriaService) { }

  ngOnInit(): void {
    this.obtener_Materias();
  }

  Validar_Campo(): boolean{
    if(this.buscar.materia === '' && this.buscar.seccion !=0 ){
      return false;
    }
    return true;
  }

  obtener_Materias (){
    this.materiaService.getMaterias().subscribe(
      res => {
        //console.log(this.listMateria)
        this.lista_materias = res;
      },
      err => console.log(err)
    );
  }

  Buscar_Materia(){
    if(this.Validar_Campo()){
      this.calificacionService.Search(this.buscar).subscribe(
        res => {
          this.list_resultados = res;
          console.log(res);
          this.buscar = '';
        },
        err => {
          console.log(err);
          this.buscar = '';
        }
      )
    }
  }

}
