import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  //Variable para la dirección IP del host
  API_URI = 'http://localhost:3005/api/asigMaterias';

  constructor(private http: HttpClient) { }

  getAsigMaterias = () =>  this.http.get(`${this.API_URI}`);
  getAsigMateria = (id: string|number) => this.http.get(`${this.API_URI}/${id}`);
  saveAsigMateria = (asig: any) => this.http.post(`${this.API_URI}`,asig);
  deleteAsigMateria = (id: number|string) => this.http.delete(`${this.API_URI}/${id}`);
  updateAsigMateria = (id:number|string, updatedAsig: any): Observable<any> => this.http.put(`${this.API_URI}/${id}`,updatedAsig);

}
