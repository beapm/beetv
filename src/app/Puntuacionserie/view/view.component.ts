import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Puntuacionserie } from 'src/app/Entities/Puntuacionserie';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewPuntuacionserieComponent implements OnInit {

  puntuacionserie: Puntuacionserie = new Puntuacionserie();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="puntuacionserie"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.puntuacionserie=data;
    })
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["puntuacionserie/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["puntuacionserie/eliminar",id])
  }

  atras() {
    this._location.back();
  }
}
