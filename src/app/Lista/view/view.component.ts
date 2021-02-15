import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/Entities/Lista';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewListaComponent implements OnInit {

  lista: Lista = new Lista();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="lista"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.lista=data;
    })
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["lista/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["lista/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
