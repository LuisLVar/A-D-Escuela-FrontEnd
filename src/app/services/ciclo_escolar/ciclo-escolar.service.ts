import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Ciclo} from '../../models/ciclo-escolar.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CicloEscolarService {

  //TODO cambiar la direccion por ip o dominio
  API_URI = 'direccion';

  constructor(private http: HttpClient) { }

  getCiclos(){
    return this.http.get(`${this.API_URI}/ciclos`);
  }

  getCiclo(id: string){
    return this.http.get(`${this.API_URI}/ciclos/${id}`);
  }

  saveCiclo(ciclo: Ciclo){
    return this.http.post(`${this.API_URI}/ciclos`,ciclo);
  }

  deleteCiclo(id: number){
    return this.http.delete(`${this.API_URI}/ciclos/${id}`);
  }

  updateCiclo(id:number, updatedCiclo: Ciclo): Observable<Ciclo> {
    return this.http.put(`${this.API_URI}/ciclos/${id}`,updatedCiclo);
  }

}
