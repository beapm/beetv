import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Serie } from '../../Entities/Serie';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistSerieComponent implements OnInit {

  series:Serie[] = Array();
  entidad="serie"

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.series = data;});
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
    this.router.navigate(["serie/ver", id])
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["serie/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["serie/eliminar",id])
  }

  verGenero(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["genero/ver", id])
  }

  verSerie(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["serie/ver", id])
  }
}
