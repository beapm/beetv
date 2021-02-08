import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Tipousuario } from 'src/app/Entities/Tipousuario';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewTipousuarioComponent implements OnInit {

  tipousuario: Tipousuario = new Tipousuario();

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="tipousuario"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.tipousuario=data;
    })
  }

  editarTipousuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipousuario/editar",id])
  }

  eliminarTipousuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipousuario/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
