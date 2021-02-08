import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Entities/Genero';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewGeneroComponent implements OnInit {

  genero: Genero = new Genero();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="genero"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.genero=data;
    })
  }

  editarGenero(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["genero/editar",id])
  }

  eliminarGenero(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["genero/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
