import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Ciclo} from '../../models/ciclo-escolar.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CicloEscolarService {

  
  API_URI = 'http://3.20.3.133:3005/api';

  constructor(private http: HttpClient) { }

  getCiclos(){
    return this.http.get(`${this.API_URI}/ciclo`);
  }

  getCiclo(id: string){
    return this.http.get(`${this.API_URI}/ciclo/${id}`);
  }

  saveCiclo(ciclo: Ciclo){
    return this.http.post(`${this.API_URI}/ciclo`,ciclo);
  }

  deleteCiclo(id: number | string){
    return this.http.delete(`${this.API_URI}/ciclo/${id}`);
  }

  updateCiclo(id:number, updatedCiclo: Ciclo): Observable<Ciclo> {
    return this.http.put(`${this.API_URI}/ciclo/${id}`,updatedCiclo);
  }

}
