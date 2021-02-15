import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Lista } from 'src/app/Entities/Lista';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewListaComponent implements OnInit {

  lista: Lista = new Lista;
  entidad = "lista";

  usuarios:Usuario[] =  Array();

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      usuario: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  
  ngOnInit(): void {
    this.service.getPlist('usuario')
    .subscribe(data => {this.usuarios = data;});
  }
  
  guardar(): void {
    this.service.add(this.entidad, this.formulario.value)
      .subscribe(
        (data) => {
          this.guardado(),
            setTimeout(() => { this.router.navigate(['lista/lista']); }, 2000);
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
