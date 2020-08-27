import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../../models/alumnos'

@Injectable({
  providedIn: 'root'
})
export class AlumnosInscripService {

  //Variable para la dirección IP del host
  API_URI = 'http://localhost:3005/api/inscripcion';

  constructor(private http: HttpClient) { }

  getMaterias = () =>  this.http.get(`${this.API_URI}`);
  getMateria = (id: string) => this.http.get(`${this.API_URI}/${id}`);
  saveMateria = (alumno: Alumno) => this.http.post(`${this.API_URI}`,alumno);
  deleteMateria = (id: number|string) => this.http.delete(`${this.API_URI}/${id}`);
  updateMateria = (id:number|string, updatedAlumno: Alumno): Observable<Alumno> => this.http.put(`${this.API_URI}/${id}`,updatedAlumno);

}
