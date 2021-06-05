import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from 'src/app/Entities/Lista';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistListaComponent implements OnInit {
  
  usuario: Usuario | undefined= null;

  listas:Lista[] = Array();
  entidad="lista"

  constructor(private service:ServiceService, private router: Router, private activatedRoute: ActivatedRoute) { 
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("no hay session", this.activatedRoute.snapshot.data.message)
    } else {
      console.log("si hay session", this.activatedRoute.snapshot.data.message)
      this.usuario = this.activatedRoute.snapshot.data.message;
      console.log(this.usuario)
    }
  }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.listas = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  ver(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["lista/ver", id])
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["lista/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["lista/eliminar",id])
  }

  verUsuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/ver", id])
  }
}
