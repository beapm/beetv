import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Entities/Genero';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditGeneroComponent implements OnInit {

  genero: Genero = new Genero();
  entidad="genero";
  constructor(private router:Router, private service: ServiceService, private _location: Location, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.genero=data;
    })
  }
  
  actualizar() {
    let id=localStorage.getItem("id");
    let entidad="genero"
    let objeto=JSON.stringify(this.genero);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
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
  }

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