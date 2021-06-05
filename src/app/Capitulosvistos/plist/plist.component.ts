import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Capitulosvistos } from 'src/app/Entities/Capitulosvistos';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistCapitulosvistosComponent implements OnInit {

 
  capitulosvistos:Capitulosvistos[] = Array();
  entidad="capitulosvistos"

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.capitulosvistos = data;});
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
    this.router.navigate(["capitulosvistos/ver", id])
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["capitulosvistos/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["capitulosvistos/eliminar",id])
  }

  verUsuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/ver", id])
  }

  verCapitulo(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["capitulo/ver", id])
  }

}
