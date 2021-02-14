import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Serie } from 'src/app/Entities/Serie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genero } from 'src/app/Entities/Genero';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditSerieComponent implements OnInit {

  serie: Serie = new Serie;
  entidad = "serie";

  generos:Genero[] =  Array();


  formularioSerie: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder) {
    this.formularioSerie = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      sinopsis_serie: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(1000)])],
      idioma: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      duracion_media: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(360)])],
      fecha_inicio: [''],
      fecha_fin: [''],
      genero: this.formBuilder.group({
        id: ['', Validators.required],
        nombre: ['']
      }),
      id_file: ['']
    });

  }

  
  ngOnInit(): void {
    this.getObject();

    this.service.getPlist('genero')
    .subscribe(data => {this.generos = data;});
    console.log(this.generos);
  }

  getObject() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.serie=data;
    })
  }
  
  actualizar() {
    let id=localStorage.getItem("id");
    let entidad="genero"
    let objeto=JSON.stringify(this.serie);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(data=>{
      alert("Actualizado con éxito");
      this.atras();
    })
  }

  atras() {
    this._location.back();
  }

}
