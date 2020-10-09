import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AspectosService {

  API_URI = 'http://3.20.3.133:3010/api/aspectos';

  constructor(private http: HttpClient) { }

  getAspectos(){
    return this.http.get(`${this.API_URI}`);
  }

  getAspecto(id: string){
    return this.http.get(`${this.API_URI}/${id}`);
  }

  newAspecto(aspecto: any){
    return this.http.post(`${this.API_URI}`,aspecto);
  }

  deleteAspecto(id: number | string){
    return this.http.delete(`${this.API_URI}/${Number(id)}`);
  }

  updateAspecto(aspecto: any): Observable<any> {
    return this.http.put(`${this.API_URI}`,aspecto);
  }
}
