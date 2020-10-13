import { Component, OnInit } from '@angular/core';

import {CalificacionMateriaService} from '../../services/calificacion/calificacion-materia.service';

@Component({
  selector: 'app-calificacion-por-materia',
  templateUrl: './calificacion-por-materia.component.html',
  styleUrls: ['./calificacion-por-materia.component.css']
})
export class CalificacionPorMateriaComponent implements OnInit {

  public buscar: string;

  public list_resultados: any = [];

  constructor(private calificacionService: CalificacionMateriaService) { }

  ngOnInit(): void {
  }

  Validar_Campo(): boolean{
    if(this.buscar === ''){
      return false;
    }
    return true;
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
