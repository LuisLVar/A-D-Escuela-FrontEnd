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
  id:string = ''
  constructor(private _color?:ColorService) { }

  ngOnInit(): void { this.getColores(); }

  getColores(){
    this.colores = []
    this.colores.push({
      descripcion: 'Claro',
      colorcito: '#DB1D1D',
      id:'0'
    })
    /*this._color.getColores().subscribe(
      res => {
      this.colores = res
      }, err => console.log(err)
    )*/
  }

  crearColor() { }

  confirmarColor() {
    if(this.descripcion !== ''){
      /*this._color.saveColor({ codigo: this.colorcito, descripcion: this.descripcion }).subscribe(
        res => console.log(res),
        err => console.log(err)
      )*/
      this.colores.push({ colorcito: this.colorcito, descripcion: this.descripcion, id:'25'})
    }

  }

  eliminarColor(){
    this._color.deleteColor(this.id).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  obtenerId(id:string){ this.id=id; }
}
