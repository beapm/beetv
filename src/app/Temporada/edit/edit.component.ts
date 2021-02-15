import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/Entities/Serie';
import { Temporada } from 'src/app/Entities/Temporada';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditTemporadaComponent implements OnInit {

  temporada: Temporada = new Temporada();
  entidad="temporada";

  series:Serie[] =  Array();

  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editar();

    this.service.getPlist('serie')
    .subscribe(data => {this.series = data;});
    console.log(this.series);
  }

  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.temporada=data;
    })
  }
  
  actualizar() {
    let id=localStorage.getItem("id");
    let entidad="temporada"
    let objeto=JSON.stringify(this.temporada);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(data=>{
      alert("Actualizado con éxito");
      this.router.navigate(["temporada/lista"])
    })
  }

  atras() {
    this._location.back();
  }

}
