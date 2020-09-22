import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AspectosService {

  API_URI = 'http://3.20.3.133:3010/api/aspectos';

  constructor(private http: HttpClient) { }


}
