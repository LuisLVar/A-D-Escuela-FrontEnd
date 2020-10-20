import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  //Variable para la dirección IP del host
  private API_URI = 'http://3.20.3.133:3010/api/grupales';

  constructor(private http?: HttpClient) { }

  getGrupales = (seccion:string,grado:string) =>  this.http.get(`${this.API_URI}/${seccion}/${grado}`);
  getGradSec = () => this.http.get(`${this.API_URI}/gradSecciones`);
  saveGrupal = (asig: any) => this.http.post(`${this.API_URI}`,asig);
  deleteColor= (id: number|string) => this.http.delete(`${this.API_URI}/${id}`);
}
