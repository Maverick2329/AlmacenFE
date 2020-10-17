import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from '../models/response';
import { Usuario } from '../models/usuario';
import { map } from 'rxjs/operators';
import { Categoria } from '../models/categoria';
import { Login } from '../models/login';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlmacenWSService {

  url: string = 'https://localhost:44304/api/categoria';

  urlLogin: string = 'https://localhost:44304/api/usuario/login';

  private usuarioSubject: BehaviorSubject<Usuario>;
  public usuario: Observable<Usuario>;

  public get usuarioData(): Usuario {
    return this.usuarioSubject.value;
  }

  constructor(private http: HttpClient) {
    console.log('Servicio Listo!!!');
    this.usuarioSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario')));
    this.usuario = this.usuarioSubject.asObservable();
  }

  login(login: Login): Observable<Response>{
    return this.http.post<Response>(this.urlLogin, login, httpOption).pipe(
      map(res => {
        if (res.exito === 1){
          const usuario: Usuario = res.data;
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.usuarioSubject.next(usuario);
        }
        return res;
      })
    );
  }

  logout() {
    localStorage.removeItem('usuario');
    this.usuarioSubject.next(null);
  }

  getCategoria(): Observable<Response> {
   return this.http.get<Response>(this.url);
  }

  addCategoria(categoria: Categoria): Observable<Response>{
    return this.http.post<Response>(this.url, categoria, httpOption);
  }

  editCategoria(categoria: Categoria): Observable<Response>{
    return this.http.put<Response>(this.url, categoria, httpOption);
  }

  deleteCategoria(id: number): Observable<Response>{
    return this.http.delete<Response>(`${this.url}/${id}`);
  }
}
