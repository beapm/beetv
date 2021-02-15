import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capitulosvistos } from 'src/app/Entities/Capitulosvistos';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteCapitulosvistosComponent implements OnInit {

  capitulosvistos: Capitulosvistos = new Capitulosvistos();
  entidad="capitulosvistos";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.capitulosvistos=data;
    })
  }

  eliminar(capitulosvistos: Capitulosvistos) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Objeto eliminado con éxito");
        this.router.navigate(["capitulosvistos/lista"])
      })
  }

  atras() {
    this._location.back();
  }


}
