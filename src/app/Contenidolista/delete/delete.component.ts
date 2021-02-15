import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contenidolista } from 'src/app/Entities/Contenidolista';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteContenidolistaComponent implements OnInit {

  contenidolista: Contenidolista = new Contenidolista();
  entidad="contenidolista";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.contenidolista=data;
    })
  }

  eliminar(contenidolista: Contenidolista) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Objeto eliminado con éxito");
        this.router.navigate(["contenidolista/lista"])
      })
  }

  atras() {
    this._location.back();
  }

}
