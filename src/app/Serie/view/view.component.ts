import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Serie } from '../../Entities/Serie';
import { Genero } from '../../Entities/Genero';
import { Usuario } from 'src/app/Entities/Usuario';

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
  showMore: false;

  usuario: Usuario | undefined;

  constructor(private service:ServiceService, private router: Router, private _location: Location, private activatedRoute: ActivatedRoute) { 
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("Sesión activa", this.activatedRoute.snapshot.data.message);
    } else {
      console.log("Sin sesión", this.activatedRoute.snapshot.data.message)
      this.usuario = this.activatedRoute.snapshot.data.message;
      console.log(this.usuario.login)
    }
  }

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
