import { Component, OnInit } from '@angular/core';
import { AsigMateriaService } from '../../services/asigMaterias/asig-materia.service'
import { GradoService } from '../../services/grados/grado.service'

@Component({
  selector: 'app-asig-materia',
  templateUrl: './asig-materia.component.html',
  styleUrls: ['./asig-materia.component.css']
})
export class AsigMateriaComponent implements OnInit {

  constructor(private _asig:AsigMateriaService,private _grado:GradoService) { }

  ngOnInit(): void {
  }

}
