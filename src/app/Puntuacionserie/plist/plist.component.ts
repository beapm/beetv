import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Puntuacionserie } from 'src/app/Entities/Puntuacionserie';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistPuntuacionserieComponent implements OnInit {


  puntuaciones:Puntuacionserie[] = Array();
  entidad="puntuacionserie"

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.puntuaciones = data;});
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
    this.router.navigate(["puntuacionserie/ver", id])
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["puntuacionserie/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["puntuacionserie/eliminar",id])
  }
}
