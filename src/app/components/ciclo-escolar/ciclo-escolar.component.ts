import { Component, OnInit } from '@angular/core';

import {CicloEscolarService} from '../../services/ciclo_escolar/ciclo-escolar.service'
import {Ciclo} from '../../models/ciclo-escolar.interface';

@Component({
  selector: 'app-ciclo-escolar',
  templateUrl: './ciclo-escolar.component.html',
  styleUrls: ['./ciclo-escolar.component.css']
})
export class CicloEscolarComponent implements OnInit {

  constructor() { }

  // TODO: este array se debe dejar vacio
  listaCiclo: Array<Ciclo> = [
    {Ciclo: 1, year:2010},
    {Ciclo: 2, year:2011}
  ];

  newCiclo: Ciclo = {
    year: 0
  };

  cicloOperacional: Ciclo = {
    Ciclo: 0, year: 0
  };

  ngOnInit(): void {
  }


  Obtener_Ciclo(item: Ciclo): void{
    this.cicloOperacional = item;
  }

}
