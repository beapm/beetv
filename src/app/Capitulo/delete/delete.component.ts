import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capitulo } from 'src/app/Entities/Capitulo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteCapituloComponent implements OnInit {

  capitulo: Capitulo = new Capitulo();
  entidad="capitulo";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.capitulo=data;
    })
  }

  eliminar(capitulo: Capitulo) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Capítulo eliminado con éxito");
        this.router.navigate(["capitulo/lista"])
      })
  }

  atras() {
    this._location.back();
  }


}
