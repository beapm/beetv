import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/Entities/Lista';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteListaComponent implements OnInit {

  lista: Lista = new Lista();
  entidad="lista";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.lista=data;
    })
  }

  eliminar(lista: Lista) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Lista eliminada con éxito");
        this.router.navigate(["lista/lista"])
      })
  }

  atras() {
    this._location.back();
  }


}
