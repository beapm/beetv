import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contenidolista } from 'src/app/Entities/Contenidolista';
import { Lista } from 'src/app/Entities/Lista';
import { Serie } from 'src/app/Entities/Serie';
import { ServiceService } from 'src/app/Service/service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewContenidolistaComponent implements OnInit {

  contenidolista: Contenidolista = new Contenidolista;
  entidad = "contenidolista";

  listas: Lista[] = Array();
  series: Serie[] = Array();

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formulario = this.formBuilder.group({
      lista: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      serie: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      siguiendo: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.service.getPlist('lista')
      .subscribe(data => { this.listas = data; });
    this.service.getPlist('serie')
      .subscribe(data => { this.series = data; });
  }

  guardar(): void {
    this.service.add(this.entidad, this.formulario.value)
      .subscribe(
        (data) => {
          this.guardado(),
            setTimeout(() => { this.router.navigate(['contenidolista/lista']); }, 2000);
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
