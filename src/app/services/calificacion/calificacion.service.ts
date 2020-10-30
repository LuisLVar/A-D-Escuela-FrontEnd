import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seccion } from '../../models/Seccion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

   //Variable para la dirección IP del host
   API_URI = 'http://3.20.3.133:3010/api';

  constructor(private http: HttpClient) { }

  getMateriasSecc = (id: number) => this.http.get(`${this.API_URI}/seccion_materia/${id}`);
  getAlumnos = (seccion: number,bloque:number) => this.http.get(`${this.API_URI}/inscripciones/alumnosBloque/${seccion}&${bloque}`);

}
