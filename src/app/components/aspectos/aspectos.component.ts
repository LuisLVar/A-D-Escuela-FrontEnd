import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspectos',
  templateUrl: './aspectos.component.html',
  styleUrls: ['./aspectos.component.css']
})
export class AspectosComponent implements OnInit {

  listaAspecto: any = [{ aspecto: 1, nombre: "Uniforme adecuado" }, { aspecto: 2, nombre: "Conducta" },
  { aspecto: 3, nombre: "Puntualidad" }];

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
