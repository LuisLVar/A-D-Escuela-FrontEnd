import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/colores/color.service'


@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  colorcito: any = '';
  descripcion: any = '';
  colores: any = [];

  constructor(private _color?:ColorService) { }

  ngOnInit(): void { this.getColores(); }

  getColores(){
    this.colores = []
    this._color.getColores().subscribe(
      res => {
      this.colores = res
      }, err => console.log(err)
    )
  }

  crearColor() { }

  confirmarColor() {
    if(this.descripcion !== ''){
      this._color.saveColor({ codigo: this.colorcito, descripcion: this.descripcion }).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }

  }

  eliminarColor(id:string|number){
    this._color.deleteColor(id).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
