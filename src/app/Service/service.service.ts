import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Serie } from '../Entities/Serie';
import { Genero } from '../Entities/Genero';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8082/';

  getSeries() {
    return this.http.get<Serie[]>(this.Url + 'serie/all');
  }

  getSerieById(id: number | String) {
    return this.http.get<Serie>(this.Url + '/serie/:id');
  }

  getGeneros() {
    return this.http.get<Genero[]>(this.Url + 'genero/all');
  }

  addGenero(genero: String) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.post<any>(this.Url + 'genero/', genero, httpOptions);
  }

  getGeneroById(id: number | String) {
    return this.http.get<Genero>(this.Url+'genero/'+id)
  }

  updateGenero(genero: Genero) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.put<Genero>(this.Url+'genero/'+ genero.id, genero, httpOptions)
  }

  deleteGenero(genero: Genero) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.delete<Genero>(this.Url+'genero/'+genero.id, httpOptions)
  }
}
