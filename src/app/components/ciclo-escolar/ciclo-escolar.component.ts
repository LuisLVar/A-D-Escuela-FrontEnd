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
  public listaCiclo: any = [];

  //lleva el control del ciclo a crear
  newCiclo: Ciclo = {
    ciclo: 0,
    anio: 0
  };
  // me sirve para actulizar y eliminar
  cicloOperacional: Ciclo = {
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

  Create_Ciclo():void {

    console.log(this.newCiclo);

    delete this.newCiclo.ciclo;

    if( this.newCiclo.anio > 0){
      this.cicloService.saveCiclo(this.newCiclo)
      .subscribe(
        res => {
            console.log(res);
        },
        err => {
          console.log(err);
        }
      );      
    }
    this.Establecer_Valores();
  }

  Delete_Game(): void{
    this.cicloService.deleteCiclo(this.cicloOperacional.ciclo)
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

  Update_Game(): void{
    const id = this.cicloOperacional.ciclo
    delete this.cicloOperacional.ciclo;
    this.cicloService.updateCiclo(id, this.cicloOperacional)
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
    this.newCiclo.anio = 0;
    this.newCiclo.ciclo = 0;
    this.cicloOperacional.anio = 0;
    this.cicloOperacional.ciclo = 0;
  }


}
