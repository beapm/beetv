import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Capitulo } from 'src/app/Entities/Capitulo';
import { Capitulosvistos } from 'src/app/Entities/Capitulosvistos';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewCapitulosvistosComponent implements OnInit {

  capitulosvistos: Capitulosvistos = new Capitulosvistos;
  entidad = "capitulosvistos";

  usuarios: Usuario[] = Array();
  capitulos: Capitulo[] = Array();

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formulario = this.formBuilder.group({
      usuario: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      capitulo: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      visto: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.service.getPlist('usuario')
      .subscribe(data => { this.usuarios = data; });
    this.service.getPlist('capitulo')
      .subscribe(data => { this.capitulos = data; });
  }

  guardar():void {
    this.service.add(this.entidad, this.formulario.value)
    .subscribe(
        (data) => {
          this.guardado(), 
          setTimeout(() => {this.router.navigate(['capitulosvistos/lista']);},2000);
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
