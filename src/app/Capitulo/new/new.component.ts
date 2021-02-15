import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Capitulo } from 'src/app/Entities/Capitulo';
import { Temporada } from 'src/app/Entities/Temporada';
import { ServiceService } from 'src/app/Service/service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewCapituloComponent implements OnInit {
  
  capitulo: Capitulo = new Capitulo;
  entidad = "capitulo";

  temporadas:Temporada[] =  Array();

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      sinopsis_capitulo: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(1000)])],
      fecha_emision: ['', Validators.required],
      duracion: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(360)])],
      temporada: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      id_file: ['1']
    });
  }

  ngOnInit(): void {
    this.service.getPlist('temporada')
    .subscribe(data => {this.temporadas = data;});
    console.log(this.temporadas);
  }
  
  guardar():void {
    this.service.add(this.entidad, this.formulario.value)
    .subscribe(
        (data) => {
          this.guardado(), 
          setTimeout(() => {this.router.navigate(['capitulo/lista']);},2000);
        },
        (error) => {
          this.error(), 
          setTimeout(() => {this.router.navigate(['home']);},2000);
        }
      )
  };

  atras() {
    this._location.back();
  }

  guardado() {
    this.dialog.open(ModalGuardado);
  }

  error() {
    this.dialog.open(ModalError);
  }

}


@Component({
  selector: 'modalGuardado',
  templateUrl: 'modalGuardado.html',
})
export class ModalGuardado {}

@Component({
  selector: 'modalError',
  templateUrl: 'modalError.html',
})
export class ModalError {}