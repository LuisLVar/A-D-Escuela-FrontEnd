import { Component, OnInit } from '@angular/core';
import { CalificacionService } from '../../../services/grupal/calificacion.service'

@Component({
  selector: 'app-califi-grupal',
  templateUrl: './califi-grupal.component.html',
  styleUrls: ['./califi-grupal.component.css']
})
export class CalifiGrupalComponent implements OnInit {

  grupales: any= []
  lista: any = []
  irGrupales:boolean = false
  constructor(private _grupal: CalificacionService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(){
    this._grupal.getGradSec().subscribe(
      res => this.lista=res,
      err => console.error(err)
    )
  }

  GradSec(idSeccion:string,idGrado:string){
    this._grupal.getGrupales(idSeccion,idGrado).subscribe(
      res => {
        this.grupales = res;
        this.irGrupales = true;
      },
      err => console.error(err)
    )
  }

}
