import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Puntuacionserie } from 'src/app/Entities/Puntuacionserie';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeletePuntuacionserieComponent implements OnInit {

  puntuacionserie: Puntuacionserie = new Puntuacionserie();
  entidad="puntuacionserie";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.puntuacionserie=data;
    })
  }

  eliminar(puntuacionserie: Puntuacionserie) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Objeto eliminado con éxito");
        this.router.navigate(["puntuacionserie/lista"])
      })
  }

  atras() {
    this._location.back();
  }


}
