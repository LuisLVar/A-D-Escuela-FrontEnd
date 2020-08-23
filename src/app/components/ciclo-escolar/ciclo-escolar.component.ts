import { Component, OnInit } from '@angular/core';

import {CicloEscolarService} from '../../services/ciclo_escolar/ciclo-escolar.service'
import {Ciclo} from '../../models/ciclo-escolar.interface';

@Component({
  selector: 'app-ciclo-escolar',
  templateUrl: './ciclo-escolar.component.html',
  styleUrls: ['./ciclo-escolar.component.css']
})
export class CicloEscolarComponent implements OnInit {

  constructor(private cicloService: CicloEscolarService) { }

  // TODO: este array se debe dejar vacio
  private listaCiclo: any = [];

  //lleva el control del ciclo a crear
  private newCiclo: Ciclo = {
    anio: 0
  };
  // me sirve para actulizar y eliminar
  private cicloOperacional: Ciclo = {
    ciclo: 0, anio: 0
  };

  ngOnInit(): void {
  }


  Obtener_Ciclo(item: Ciclo): void{
    this.cicloOperacional = item;
  }

  Listar_Cilos():void{
      this.cicloService.getCiclos().subscribe(
        res => {
          this.listaCiclo = res;
        },
        err => console.log(err)
      );
  }


}
