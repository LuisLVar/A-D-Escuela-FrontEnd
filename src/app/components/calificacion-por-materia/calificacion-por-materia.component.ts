import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificacion-por-materia',
  templateUrl: './calificacion-por-materia.component.html',
  styleUrls: ['./calificacion-por-materia.component.css']
})
export class CalificacionPorMateriaComponent implements OnInit {

  public buscar: string;

  public list_resultados: any = [];

  constructor() { }

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

    }
  }

}
