import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { HelperService } from 'src/app/Service/helper.service';
import { Lista } from 'src/app/Entities/Lista';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = new Usuario();
  entidad = "usuario";
  messageUsuarioID:any;
  verPerfil=false;
  verLista=false;
  listas: Lista[]=Array();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location, private helper: HelperService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.helper.customMessageUsuarioID.subscribe((msg)=> {
      this.messageUsuarioID = msg;
    })

    this.editar();

    let entidad="usuario"
    this.service.getById(entidad,+this.messageUsuarioID)
    .subscribe(data=>{
      this.usuario=data;
      console.log("probando si muestra usuario", this.usuario);
    })

    this.service.listasXUsuario(+this.messageUsuarioID)
    .subscribe(data=>{
      this.listas=data.content;
      console.log("probando si muestra usuid", this.messageUsuarioID);
      console.log("probando si muestra listas", this.listas);

    })
  }

  actualizar() {
    let id=localStorage.getItem("id");
    let entidad="usuario"
    let objeto=JSON.stringify(this.usuario);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(
      (data) => {
        this.guardado()
      },
      (error) => {
        this.error()
      }
    )
  }


  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.usuario=data;
    })
  }

  perfil() {
    this.verPerfil=true;
    this.verLista=false; 
  }

  mostrarListas() {
      this.verLista=true; 
      this.verPerfil=false;
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