import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Entities/Genero';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewGeneroComponent implements OnInit {

  genero: Genero = new Genero;
  entidad="genero";

  formulario: FormGroup;

  constructor(private service:ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
    })
   }

  ngOnInit(): void {
  }
  
  guardar(): void {
    this.service.add(this.entidad, this.formulario.value)
      .subscribe(
        (data) => {
          this.guardado(),
            setTimeout(() => { this.router.navigate(['genero/lista']); }, 2000);
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