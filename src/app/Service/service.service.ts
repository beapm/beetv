import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Serie } from '../Entities/Serie';
import { Genero } from '../Entities/Genero';
import { Tipousuario } from '../Entities/Tipousuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8082/';
 
  getById(entidad: String, id: number) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.get<any>(this.Url+ entidad +'/'+ id, httpOptions)
  }

  getPlist(entidad:String) {
    return this.http.get<any>(this.Url + entidad + '/all');
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
    return this.http.put(this.Url+ entidad+'/'+ id, objeto, httpOptions)
  }

  delete(entidad: String, id: number) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.delete<any>(this.Url+ entidad + '/'+ id, httpOptions)
  }

  puntuacionSerie(id:number) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.get<any>(this.Url+ 'serie/puntuacion/'+ id, httpOptions)
  }
}
