import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contenidolista } from 'src/app/Entities/Contenidolista';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewContenidolistaComponent implements OnInit {

  contenidolista: Contenidolista = new Contenidolista();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="contenidolista"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.contenidolista=data;
    })
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["contenidolista/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["contenidolista/eliminar",id])
  }

  atras() {
    this._location.back();
  }
}
