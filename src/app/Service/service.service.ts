import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Serie } from '../Entities/Serie';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url= 'http://localhost:8082/';

  getSeries() {
    return this.http.get<Serie[]>(this.Url + 'serie/all');
  }
}
