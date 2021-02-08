import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Genero } from '../../Entities/Genero';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistGeneroComponent implements OnInit {

  generos:Genero[] = Array();
  entidad="genero";

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.generos = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  verGenero(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["genero/ver", id])
  }

  editarGenero(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["genero/editar",id])
  }

  eliminarGenero(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["genero/eliminar",id])
  }

}
