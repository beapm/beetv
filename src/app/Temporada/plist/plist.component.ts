import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Temporada } from 'src/app/Entities/Temporada';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistTemporadaComponent implements OnInit {

  temporadas:Temporada[] = Array();
  entidad="temporada"

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.temporadas = data;});
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
    this.router.navigate(["temporada/ver", id])
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["temporada/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["temporada/eliminar",id])
  }
}
