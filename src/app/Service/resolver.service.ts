import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Usuario } from '../Entities/Usuario';
import { ServiceService } from './service.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Observable<Usuario|null>>{

  constructor(private service: ServiceService, private router: Router) { }

  resolve(): Observable<Usuario | null> {
    return this.service.checkSession().pipe(
      catchError(error => {
        console.log('error',error);
        return of(null)
        })
    )
  }
}
