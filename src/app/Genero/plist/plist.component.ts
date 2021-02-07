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

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getGeneros()
      .subscribe(data => {this.generos = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  editarGenero(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["genero/editar",id])
  }

  eliminarGenero(genero: Genero) {
     this.service.deleteGenero(genero)
     .subscribe(data=>{
       this.generos=this.generos.filter(p=>p!==genero);
       alert("Género eliminado con éxito");
       this.router.navigate(["genero/lista"])
     })
  }
}
