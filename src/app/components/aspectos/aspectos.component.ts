import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspectos',
  templateUrl: './aspectos.component.html',
  styleUrls: ['./aspectos.component.css']
})
export class AspectosComponent implements OnInit {

  listaAspecto: any;

  nuevoAspecto: any = {
    aspecto: 0,
    nombre: ""
  };

  aspectoEditar: any = {
    aspecto: -1,
    nombre: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  obtenerAspecto(aspecto: any) { 

  }

  BorrarAspecto() { 

  }

  EditarAspecto() { 

  }

  CrearAspecto() { 
    
  }

}
