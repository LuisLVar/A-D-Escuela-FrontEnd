import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Ciclo} from '../../models/ciclo-escolar.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CicloEscolarService {

  
  API_URI = 'http://3.20.3.133:3010/api/ciclos';

  constructor(private http: HttpClient) { }

  getCiclos(){
    return this.http.get(`${this.API_URI}`);
  }

  getCiclo(id: string){
    return this.http.get(`${this.API_URI}/ciclos/${id}`);
  }

  saveCiclo(ciclo: Ciclo){
    return this.http.post(`${this.API_URI}`,ciclo);
  }

  deleteCiclo(id: number | string){
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateCiclo(updatedCiclo: Ciclo): Observable<Ciclo> {
    return this.http.put(`${this.API_URI}`,updatedCiclo);
  }

}
