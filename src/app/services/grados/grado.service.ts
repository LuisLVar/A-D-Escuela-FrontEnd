import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Grado} from '../../models/grado.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  API_URI = 'http://3.20.3.133:3005/api';

  constructor(private http: HttpClient) { }

  getGrados(){
    return this.http.get(`${this.API_URI}/grado`);
  }
  
  getGrado(id: number){
    return this.http.get(`${this.API_URI}/grado/${id}`);
  }

  saveGrado(grado: Grado){
    return this.http.post(`${this.API_URI}/grado`,grado);
  }

  deleteGrado(id: number | string){
    return this.http.delete(`${this.API_URI}/grado/${id}`);
  }

  updateGrado(id: number | string, updatedGrado: Grado): Observable<Grado>{
    return this.http.put(`${this.API_URI}/grado/${id}`, updatedGrado);
  }

}
