import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Usuario } from 'src/app/Entities/Usuario';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;
  entidad = "usuario";
  
  formulario: FormGroup;

  constructor(private service:ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formulario = this.formBuilder.group({
      login: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      apellido1: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(1000)])],
      apellido2: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      email: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(360)])],
      password: [''],
      tipousuario: this.formBuilder.group({
        id: ['2'],
        nombre: ['Usuario']
      }),
      id_file: ['1']
    });
   }

  ngOnInit(): void {
  }

  guardar():void {
    this.service.add(this.entidad, this.formulario.value)
    .subscribe(
        (data) => {
          this.guardado(), 
          console.log(data)
          setTimeout(() => {this.router.navigate(['login']);},2000);
        },
        (error) => {
          this.error(), 
          setTimeout(() => {this.router.navigate(['home']);},2000);
        }
      )
  };

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