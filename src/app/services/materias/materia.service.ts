import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../../models/materia'

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  //Variable para la dirección IP del host
  API_URI = 'http://localhost:3005/api/materias';

  constructor(private http: HttpClient) { }

  getMaterias = () =>  this.http.get(`${this.API_URI}`);
  getMateria = (id: string|number) => this.http.get(`${this.API_URI}/${id}`);
  saveMateria = (materia: Materia) => this.http.post(`${this.API_URI}`,materia);
  deleteMateria = (id: number|string) => this.http.delete(`${this.API_URI}/${id}`);
  updateMateria = (id:number|string, updatedMateria: Materia): Observable<Materia> => this.http.put(`${this.API_URI}/${id}`,updatedMateria);

}
