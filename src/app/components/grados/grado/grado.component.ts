import { Component, OnInit } from '@angular/core';
import { Grado } from 'src/app/models/grado.interface';
import {GradoService} from '../../../services/grados/grado.service';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css']
})
export class GradoComponent implements OnInit {


  constructor(private gradoService: GradoService) { }

  public listaGrado: any = [];

  newGrado : Grado = {
    grado: 0,
    nombre_grado: ''
  }

  Grado_Operacional: Grado ={
    grado: -1,
    nombre_grado: ''
  }


  ngOnInit(): void {
    this.Listar_Grados();
  }

  Listar_Grados(): void {
    this.gradoService.getGrados().subscribe(
      res => {
        this.listaGrado = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  Create_Grado (): void{
    
    const nuevo = {nombre: this.newGrado.nombre_grado};

    if(nuevo.nombre != ''){
      this.gradoService.saveGrado(nuevo).subscribe(
        res => {
            //TODO: alerta 
            this.Listar_Grados();
            this.Establecer_Valores();
        },
        err => {
            //TODO: alera
            console.log(err);
        }
      )
    }else{
      //TODO: aviso
    }
  }

  Obtener_Item(item: Grado): void{
    this.Grado_Operacional = item;
  }

  Update_Grado(): void{

    const nuevo = {grado: this.Grado_Operacional.grado, nombre: this.Grado_Operacional.nombre_grado};

    this.gradoService.updateGrado(nuevo)
    .subscribe(
      res => {
        //TODO: aviso
        this.Listar_Grados();
        this.Establecer_Valores();
        console.log(res);
      },
      err => {
        //TODO: aviso
        console.log(err);
      }
    ); 
  }

  Delete_Grado(): void {
    console.log(this.Grado_Operacional);
    this.gradoService.deleteGrado(this.Grado_Operacional.grado)
    .subscribe(
      res => {
        //TODO: aviso
        this.Listar_Grados();
        this.Establecer_Valores();
        console.log(res);
      }, 
      err => {
        //TODO: aviso
        console.log(err);
      }
    );
  }

  Establecer_Valores(): void {
    this.newGrado.grado = 0;
    this.newGrado.nombre_grado = '';
    this.Grado_Operacional.grado = -1;
    this.Grado_Operacional.nombre_grado = '';

  }

}
