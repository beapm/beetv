import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Puntuacionserie } from 'src/app/Entities/Puntuacionserie';
import { Serie } from 'src/app/Entities/Serie';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewPuntuacionserieComponent implements OnInit {

  puntuacionserie: Puntuacionserie = new Puntuacionserie;
  entidad = "puntuacionserie";

  series:Serie[] =  Array();
  usuarioSesion:Usuario = new Usuario();

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formulario = this.formBuilder.group({
      puntuacion: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])],
      serie: this.formBuilder.group({
        id: ['', Validators.required],
      }),
      usuario: this.formBuilder.group({
        login: ['', Validators.required],
      })
    });
  }

  
  ngOnInit(): void {
    this.service.getPlist('serie')
    .subscribe(data => {this.series = data;});

    this.service.checkSession().subscribe((data)=>
    {
        this.usuarioSesion=data.body;
        console.log(this.usuarioSesion);
        console.log(data);
      })
  }
  
  guardar(): void {
    this.service.add(this.entidad, this.formulario.value)
      .subscribe(
        (data) => {
          this.guardado(),
            setTimeout(() => { this.router.navigate(['puntuacionserie/lista']); }, 2000);
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