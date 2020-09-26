import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { InscripAlumno } from '../../models/inscrip-alumnos';

@Injectable({
  providedIn: 'root'
})
export class InscripAlumService {

  //Variable para la dirección IP del host
  API_URI = ' http://3.20.3.133:3010/api/inscrip_alumnos';

  constructor(private http: HttpClient) { }

  getInscripAlumnos = () =>  this.http.get(`${this.API_URI}`);
  getInscripAlumno = (id: string) => this.http.get(`${this.API_URI}/${id}`);
  saveInscripAlumno = (alumno: InscripAlumno) => this.http.post(`${this.API_URI}`,alumno);
  deleteInscripAlumno = (id: number|string) => this.http.delete(`${this.API_URI}/${id}`);
  updateInscripAlumno = (id:number|string, updatedAlumno: InscripAlumno): Observable<InscripAlumno> => this.http.put(`${this.API_URI}/${id}`,updatedAlumno);

}
