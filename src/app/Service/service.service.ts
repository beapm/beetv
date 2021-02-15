import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Usuario } from '../Entities/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8082/';

  loginUsuario(objeto: String) {
    return this.http.post<any>(this.Url + 'session/', objeto, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'json',
      withCredentials: true
    });
  }

  checkSession(): Observable<any> {
    return this.http.get<Usuario>(this.Url + 'session/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'json',
      withCredentials: true
    }).pipe(
      catchError(err=>{
        console.log('ha ocurrido un error', err);
        return throwError(err);
      })); 
  }

  logout() {
    return this.http.delete(this.Url + 'session/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'json',
      withCredentials: true
    });
  }

  getById(entidad: String, id: number) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.get<any>(this.Url + entidad + '/' + id, httpOptions)
  }

  getPlist(entidad: String) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.get<any>(this.Url + entidad + '/all', httpOptions);
  }

  add(entidad: String, objeto: String) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.post<any>(this.Url + entidad + '/', objeto, httpOptions);
  }

  update(entidad: String, objeto: String, id: String | null) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.put(this.Url + entidad + '/' + id, objeto, httpOptions)
  }

  delete(entidad: String, id: number) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.delete<any>(this.Url + entidad + '/' + id, httpOptions)
  }

  puntuacionSerie(id: number) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.get<any>(this.Url + 'serie/puntuacion/' + id, httpOptions)
  }

  seriesMasPuntuadas() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.get<any>(this.Url + 'serie/maspuntuadas', httpOptions)
  }
}
