import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  colorcito: any = '';
  descripcion: any = '';
  colores: any[]=[];

  constructor() { }
  ngOnInit(): void { }
  crearColor() { }
  confirmarColor() {}

}
