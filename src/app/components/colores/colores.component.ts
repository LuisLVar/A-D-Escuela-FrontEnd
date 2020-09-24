import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  colorcito: any = '';
  descripcion: any = '';
  colores: any[];

  constructor() { }
  ngOnInit(): void {
    this.colores = [{
      colorcito: '#832525',
      descripcion: 'Color para lenguaje'
    }];
  }
  crearColor() { }
  confirmarColor() {}
  eliminarColor(){}
}
