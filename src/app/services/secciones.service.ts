import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

   //Variable para la dirección IP del host
   API_URI = 'direccion';

  constructor(private http: HttpClient) { }

  getMaterias = () =>  this.http.get(`${this.API_URI}/materias`);
  getMateria = (id: string) => this.http.get(`${this.API_URI}/materias/${id}`);
  saveMateria = (materia: Materia) => this.http.post(`${this.API_URI}/materias`,materia);
  deleteMateria = (id: number|string) => this.http.delete(`${this.API_URI}/materias/${id}`);
  updateMateria = (id:number|string, updatedMateria: Materia): Observable<Materia> => this.http.put(`${this.API_URI}/materias/${id}`,updatedMateria);
}
