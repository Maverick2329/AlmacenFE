import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

const httpOption ={
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlmacenWSService {

  urlLogin: string = 'https://localhost:44304/api/usuario/login';
  url: string = 'https://localhost:44304/api/categoria';

  constructor(private http: HttpClient) {
    console.log('Servicio Listo!!!');
  }

  login(email: string, password: string):Observable<Response>{
    return this.http.post<Response>(this.urlLogin,{email,password},httpOption);
  }

  getCategoria(): Observable<Response> {
   return this.http.get<Response>(this.url);
  }
}
