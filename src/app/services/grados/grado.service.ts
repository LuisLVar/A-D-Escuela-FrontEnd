import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Grado} from '../../models/grado.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  API_URI = 'http://3.20.3.133:3010/api/grados';

  constructor(private http: HttpClient) { }

  getGrados(){
    return this.http.get(`${this.API_URI}`);
  }
  
  getGrado(id: number){
    return this.http.get(`${this.API_URI}/grado/${id}`);
  }

  saveGrado(grado: any){
    return this.http.post(`${this.API_URI}`,grado);
  }

  deleteGrado(id: number | string){
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateGrado(updatedGrado: any): Observable<Grado>{
    return this.http.put(`${this.API_URI}`, updatedGrado);
  }

}
