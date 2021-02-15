import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Entities/Usuario';
import { Tipousuario } from 'src/app/Entities/Tipousuario';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;
  entidad = "usuario";

  tipousuarios:Tipousuario[] =  Array();

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      apellido1: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(1000)])],
      apellido2: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(1000)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      login: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(360)])],
      password: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(360)])],
      tipousuario: this.formBuilder.group({
        id: ['', Validators.required],
        nombre: ['']
      }),
      id_file: ['1']
    });
  }

  ngOnInit(): void {
    this.service.getPlist('tipousuario')
    .subscribe(data => {this.tipousuarios = data;});
    console.log(this.tipousuarios);
  }

  guardar(): void {
    this.service.add(this.entidad, this.formulario.value)
      .subscribe(
        (data) => {
          this.guardado(),
            setTimeout(() => { this.router.navigate(['usuario/lista']); }, 2000);
        },
        (error) => {
          this.error(),
            setTimeout(() => { this.router.navigate(['home']); }, 2000);
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
export class ModalGuardado { }

@Component({
  selector: 'modalError',
  templateUrl: 'modalError.html',
})
export class ModalError { }