import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Contenidolista } from 'src/app/Entities/Contenidolista';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistContenidolistaComponent implements OnInit {


  contenidos:Contenidolista[] = Array();
  entidad="contenidolista"

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.contenidos = data;});
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
    this.router.navigate(["contenidolista/ver", id])
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["contenidolista/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["contenidolista/eliminar",id])
  }

}
