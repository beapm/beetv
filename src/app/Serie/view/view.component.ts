import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Serie } from '../../Entities/Serie';
import { Genero } from '../../Entities/Genero';
import { Usuario } from 'src/app/Entities/Usuario';
import { Temporada } from 'src/app/Entities/Temporada';
import { Capitulo } from 'src/app/Entities/Capitulo';

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
  temps: Temporada[] = Array();
  caps: Capitulo[] = Array();
  idTemporada: number;

  tempSeleccionada: string = '0';
  verSeleccion: string = '';

  usuario: Usuario | undefined;

  constructor(private service:ServiceService, private router: Router, private _location: Location, private activatedRoute: ActivatedRoute) { 
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("Sesión activa", this.activatedRoute.snapshot.data.message);
    } else {
      console.log("Sin sesión", this.activatedRoute.snapshot.data.message)
      this.usuario = this.activatedRoute.snapshot.data.message;
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

    this.service.temporadasXSerie(+id)
    .subscribe(data=>{
      this.temps=data.content;
    })

  }

  temporadaSelecID() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.tempSeleccionada;
    this.idTemporada = +this.tempSeleccionada;
    
    this.service.capitulosXTemporada(this.idTemporada)
    .subscribe(data=>{
      this.caps=data.content;
      console.log(this.caps)
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
