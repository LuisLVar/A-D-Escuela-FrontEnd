import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalificacionMateriaService {

  API_URI = 'http://3.20.3.133:3010/api/calificacion';

  constructor(private http: HttpClient) { }


  Search(materia: string){
    return this.http.post(`${this.API_URI}`, materia);
  }
}
