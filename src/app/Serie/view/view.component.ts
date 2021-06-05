import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Serie } from '../../Entities/Serie';
import { Genero } from '../../Entities/Genero';
import { Usuario } from 'src/app/Entities/Usuario';
import { Temporada } from 'src/app/Entities/Temporada';
import { Capitulo } from 'src/app/Entities/Capitulo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  booleanVisto: boolean;

  tempSeleccionada: string = '0';
  verSeleccion: string = '';

  usuario: Usuario = new Usuario();

  usuarioSesion:Usuario = new Usuario();

  formulario: FormGroup;
  puntuacion: number;
  rating2: number;
  entidadP= "puntuacionserie";

  id_Capitulo: number;
  visto: boolean;

  constructor(private service:ServiceService, private router: Router, private _location: Location, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { 
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("Sesión activa", this.activatedRoute.snapshot.data.message);
    } else {
      console.log("Sin sesión", this.activatedRoute.snapshot.data.message)
      this.usuario = this.activatedRoute.snapshot.data.message;
    }

    this.formulario=this.formBuilder.group({
      puntuacion: '',
      usuario: this.formBuilder.group({
        id: ['']
      }),
      serie: this.formBuilder.group({
        id: ['']
      }),
    })
  }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad,+id)
    .subscribe(data=>{
      this.imagen=data.id_file;
      this.genero=data.genero.nombre;
      this.idGenero=data.genero.id;
      this.serie=data;

      console.log("probando serie", this.serie.id)
    })
    
    this.obtenerPuntuacion(+id);
    
    this.service.temporadasXSerie(+id)
    .subscribe(data=>{
      this.temps=data.content;
    })

    this.service.checkSession()
    .subscribe((data)=> {
      this.usuarioSesion=data.body;
    })
  }
  
  temporadaSelecID() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.tempSeleccionada;
    this.idTemporada = +this.tempSeleccionada;
    
    this.service.capitulosXTemporada(this.idTemporada)
    .subscribe(data=>{
      this.caps=data.content;
    })
  }

  editarSerie(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["serie/editar",+id])
  }

  obtenerPuntuacion(id: number) {
    this.service.puntuacionSerie(id)
    .subscribe(data=>{
      this.nota =data;
      this.rating2=Math.floor(data);
      this.puntuacion=this.rating2;
    })
  }

  checkearVisto(id_usuario: number, id_capitulo:number) {
    this.service.checkVistos(id_usuario, id_capitulo).subscribe((data)=>{
      this.booleanVisto=data;
      console.log("prueba check datos",id_usuario, id_capitulo);
      console.log("prueba respuesta check",data);
    });
  }

  puntuar():void {
    this.service.add("puntuacionserie", this.formulario.value).subscribe((data)=>{
      this.obtenerPuntuacion(data.serie.id);
    })
  }

  eliminarSerie(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["serie/eliminar",id])
  }

   atras() {
    this._location.back();
  }


}
