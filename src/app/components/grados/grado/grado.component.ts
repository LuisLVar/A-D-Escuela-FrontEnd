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

  public listaGrado: any = [
    {grado: 1, nombre_grado: 'Primero'},
    {grado: 2, nombre_grado: 'Segundo'},
    {grado: 2, nombre_grado: 'Tercero'},
  ];

  newGrado : Grado = {
    grado: 0,
    nombre_grado: ''
  }

  Grado_Operacional: Grado ={
    grado: -1,
    nombre_grado: ''
  }


  ngOnInit(): void {
  }

  Listar_Grados(): void {
    this.gradoService.getGrados().subscribe(
      res => {
        this.listaGrado = res;
      },
      err => {
        console.log(err);
      }
    )
  }


}
