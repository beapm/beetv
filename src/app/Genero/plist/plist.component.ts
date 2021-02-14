import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Entities/Usuario';
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

  usuario: Usuario | undefined= null;

  constructor(private service:ServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("no hay session", this.activatedRoute.snapshot.data.message)

    } else {
      console.log("si hay session", this.activatedRoute.snapshot.data.message)
      this.usuario = this.activatedRoute.snapshot.data.message;
      console.log(this.usuario)
      //router.navigate(['home'])
    }
   }

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
