import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  colorcitos: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  saveColor(){

  }
}
