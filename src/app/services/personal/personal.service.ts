import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {personal} from '../../models/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  //Variable para la dirección IP del host
  API_URI = 'http://3.20.3.133:3010/api';

  constructor(private http: HttpClient) { }

  getPersonal = () =>  this.http.get(`${this.API_URI}/personal`);
  getPersona = (id: string) => this.http.get(`${this.API_URI}/personal/${id}`);
  savePersonal = (personal:personal ) => this.http.post(`${this.API_URI}/personal`,personal);
  deletePersonal = (id: number|string) => this.http.delete(`${this.API_URI}/personal/${id}`);
  updatePersonal= (updatedPersonal: personal)=> this.http.put(`${this.API_URI}/personal/`,updatedPersonal);

}
