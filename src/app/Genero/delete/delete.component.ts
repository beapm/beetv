import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Entities/Genero';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteGeneroComponent implements OnInit {

  genero: Genero = new Genero();
  entidad="genero";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editarGenero();
  }

  editarGenero() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.genero=data;
    })
  }

  eliminarGenero(genero: Genero) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Género eliminado con éxito");
        this.router.navigate(["genero/lista"])
      })
  }

  atras() {
    this._location.back();
  }

}
