import { Component, OnInit } from '@angular/core';
import { AspectosService } from 'src/app/services/aspectos/aspectos.service';

@Component({
  selector: 'app-aspectos',
  templateUrl: './aspectos.component.html',
  styleUrls: ['./aspectos.component.css']
})
export class AspectosComponent implements OnInit {

  listaAspecto: any;

  nuevoAspecto: any = {
    nombre: ""
  };

  aspectoEditar: any = {
    aspecto: -1,
    nombre: ""
  };

  constructor(private aspectoService: AspectosService) { }

  ngOnInit(): void {
    this.listarAspectos();
  }

  obtenerAspecto(aspecto: any) { 
    this.aspectoEditar = aspecto;
  }

  listarAspectos() { 
    this.aspectoService.getAspectos()
    .subscribe(
      res => {
        console.log(res);
        this.listaAspecto = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  BorrarAspecto() { 
    console.log("entra a borrar");
    console.log(this.aspectoEditar);
    this.aspectoService.deleteAspecto(this.aspectoEditar.aspecto)
    .subscribe(
      res => {
        console.log(res);
        this.listarAspectos();
        this.aspectoEditar.aspecto = -1;
        this.aspectoEditar.nombre = "";
      },
      err => {
        console.log(err);
      }
    );
  }

  EditarAspecto() { 
    this.aspectoService.updateAspecto(this.aspectoEditar)
    .subscribe(
      res => {
        console.log(res);
        this.listarAspectos();
        this.aspectoEditar.aspecto = -1;
        this.aspectoEditar.nombre = "";
      },
      err => {
        console.log(err);
      }
    );
  }

  CrearAspecto() { 
    this.aspectoService.newAspecto(this.nuevoAspecto)
    .subscribe(
      res => {
          console.log(res);
        this.listarAspectos();
        this.nuevoAspecto.nombre = "";
      },
      err => {
        console.log(err);
      }
    );
  }

}
