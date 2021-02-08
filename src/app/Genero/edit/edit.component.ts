import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Entities/Genero';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditGeneroComponent implements OnInit {

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
  
  actualizarGenero() {
    let id=localStorage.getItem("id");
    let entidad="genero"
    let objeto=JSON.stringify(this.genero);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(data=>{
      alert("Actualizado con éxito");
      this.router.navigate(["genero/lista"])
    })
  }

  atras() {
    this._location.back();
  }
}
