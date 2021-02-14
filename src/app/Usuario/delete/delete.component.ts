import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  entidad="usuario";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.usuario=data;
    })
  }

  eliminar(usuario: Usuario) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Género eliminado con éxito");
        this.router.navigate(["usuario/lista"])
      })
  }

  atras() {
    this._location.back();
  }


}
