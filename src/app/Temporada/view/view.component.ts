import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/Entities/Serie';
import { Temporada } from 'src/app/Entities/Temporada';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewTemporadaComponent implements OnInit {

  temporada: Temporada = new Temporada();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="temporada"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.temporada=data;
    })
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["temporada/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["temporada/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
