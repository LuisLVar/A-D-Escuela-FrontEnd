import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../../models/materia'

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  //Variable para la dirección IP del host
  API_URI = 'direccion';

  constructor(private http: HttpClient) { }

  getMaterias = () =>  this.http.get(`${this.API_URI}/materias`);
  getCiclo = (id: string) => this.http.get(`${this.API_URI}/materias/${id}`);
  saveCiclo = (materia: Materia) => this.http.post(`${this.API_URI}/materias`,materia);
  deleteCiclo = (id: number|string) => this.http.delete(`${this.API_URI}/materias/${id}`);
  updateCiclo = (id:number|string, updatedMateria: Materia): Observable<Materia> => this.http.put(`${this.API_URI}/materias/${id}`,updatedMateria);

}
