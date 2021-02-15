import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Serie } from 'src/app/Entities/Serie';
import { Temporada } from 'src/app/Entities/Temporada';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewTemporadaComponent implements OnInit {

  temporada: Temporada = new Temporada;
  entidad = "temporada";

  series:Serie[] =  Array();

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      descripcion: ['', Validators.required],
      fecha_inicio: [''],
      fecha_fin: [''],
      serie: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      id_file: ['1']
    });
  }

  
  ngOnInit(): void {
    this.service.getPlist('serie')
    .subscribe(data => {this.series = data;});
    console.log(this.series);
  }
  
  guardar() {
    this.service.add(this.entidad, this.formulario.value)
    .subscribe(
        (data) => {this.router.navigate(['temporada/lista'])},
        (error) => {this.router.navigate(['home'])}
      )
  }

  atras() {
    this._location.back();
  }

}
