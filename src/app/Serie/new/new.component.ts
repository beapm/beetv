import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Serie } from 'src/app/Entities/Serie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genero } from 'src/app/Entities/Genero';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewSerieComponent implements OnInit {

  serie: Serie = new Serie;
  entidad = "serie";

  generos:Genero[] =  Array();

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      sinopsis_serie: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(1000)])],
      idioma: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      duracion_media: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(360)])],
      fecha_inicio: [''],
      fecha_fin: [''],
      genero: this.formBuilder.group({
        id: ['', Validators.required],
        nombre: ['']
      }),
      id_file: ['1']
    });
  }

  ngOnInit(): void {
    this.service.getPlist('genero')
    .subscribe(data => {this.generos = data;});
  }
  
  guardar():void {
    this.service.add(this.entidad, this.formulario.value)
    .subscribe(
        (data) => {console.log('Success!', data), this.router.navigate(['serie/lista'])},
        (error) => {console.log('error!', error), this.router.navigate(['home'])}
      )
  };

  atras() {
    this._location.back();
  }
}
