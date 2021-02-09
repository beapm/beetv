import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Serie } from '../../Entities/Serie';
import { Genero } from '../../Entities/Genero';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewSerieComponent implements OnInit {

  serie: Serie = new Serie();
  entidad="serie";
  nota: number;
  imagen: number=1;
  genero: String;
  idGenero:number;

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad,+id)
    .subscribe(data=>{
      this.imagen=data.id_file;
      this.genero=data.genero.nombre;
      this.idGenero=data.genero.id;
      this.serie=data;
    })

    this.service.puntuacionSerie(+id)
    .subscribe(data=>{
      this.serie=data;
      this.nota =data;
    })

  }

  editarSerie(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["serie/editar",+id])
  }

  eliminarSerie(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["serie/eliminar",id])
  }

   atras() {
    this._location.back();
  }
}
