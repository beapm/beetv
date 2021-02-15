import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capitulo } from 'src/app/Entities/Capitulo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewCapituloComponent implements OnInit {

  capitulo: Capitulo = new Capitulo();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="capitulo"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.capitulo=data;
    })
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["capitulo/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["capitulo/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
