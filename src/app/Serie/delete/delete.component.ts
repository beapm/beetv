import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/Entities/Serie';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteSerieComponent implements OnInit {

  serie: Serie = new Serie();
  entidad="serie";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.serie=data;
    })
  }

  eliminar(serie: Serie) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Serie eliminada con éxito");
        this.router.navigate(["serie/lista"])
      })
      this.router.navigate(["serie/lista"])
  }

  atras() {
    this._location.back();
  }
}
