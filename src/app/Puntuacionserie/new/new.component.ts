import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Puntuacionserie } from 'src/app/Entities/Puntuacionserie';
import { Serie } from 'src/app/Entities/Serie';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewPuntuacionserieComponent implements OnInit {

  puntuacionserie: Puntuacionserie = new Puntuacionserie;
  entidad = "puntuacionserie";

  series:Serie[] =  Array();
  usuarios:Usuario[] =  Array();

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      puntuacion: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])],
      serie: this.formBuilder.group({
        id: ['', Validators.required],
      }),
      usuario: this.formBuilder.group({
        id: ['', Validators.required],
      })
    });
  }

  
  ngOnInit(): void {
    this.service.getPlist('serie')
    .subscribe(data => {this.series = data;});
    this.service.getPlist('usuario')
    .subscribe(data => {this.usuarios = data;});
  }
  
  guardar() {
    this.service.add(this.entidad, this.formulario.value)
    .subscribe(
        (data) => {this.router.navigate(['puntuacionserie/lista'])},
        (error) => {this.router.navigate(['home'])}
      )
  }

  atras() {
    this._location.back();
  }

}
