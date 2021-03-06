import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../../models/alumnos'

@Injectable({
  providedIn: 'root'
})
export class AlumnosInscripService {

  //Variable para la dirección IP del host
  API_URI = ' http://3.20.3.133:3010/api/alumnos';

  constructor(private http: HttpClient) { }

  getAlumnos = () =>  this.http.get(`${this.API_URI}`);
  getAlumno = (id: string) => this.http.get(`${this.API_URI}/${id}`);
  saveAlumno = (alumno: Alumno) => this.http.post(`${this.API_URI}`,alumno);
  deleteAlumno = (id: number|string) => this.http.delete(`${this.API_URI}/${id}`);
  updateAlumno = (id:number|string, updatedAlumno: Alumno): Observable<Alumno> => this.http.put(`${this.API_URI}/${id}`,updatedAlumno);

}
