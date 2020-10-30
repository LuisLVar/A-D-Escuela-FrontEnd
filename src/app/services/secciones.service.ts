import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seccion } from '../models/Seccion';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

   //Variable para la dirección IP del host
   API_URI = 'http://3.20.3.133:3010/api';

  constructor(private http: HttpClient) { }

  getSecciones = () =>  this.http.get(`${this.API_URI}/secciones`);
  getSeccion = (id: string) => this.http.get(`${this.API_URI}/secciones/${id}`);
  saveSeccion = (seccion: Seccion) => this.http.post(`${this.API_URI}/secciones`,seccion);
  deleteSeccion = (id: number|string) => this.http.delete(`${this.API_URI}/secciones/${id}`);
  updateSeccion = (seccion: Seccion) => this.http.put(`${this.API_URI}/secciones`,seccion);
  getSeccionPersonal =(personal:number, anio:string) => this.http.post(`${this.API_URI}/secciones/personal`,{personal: personal,anio: anio});

}
