import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capitulosvistos } from 'src/app/Entities/Capitulosvistos';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewCapitulosvistosComponent implements OnInit {

  capitulosvistos: Capitulosvistos = new Capitulosvistos();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="capitulosvistos"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.capitulosvistos=data;
    })
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["capitulosvistos/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["capitulosvistos/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
