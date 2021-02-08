import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Tipousuario } from 'src/app/Entities/Tipousuario';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistTipousuarioComponent implements OnInit {

  tipousuarios: Tipousuario[] = Array();
  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    let entidad="tipousuario"
    this.service.getPlist(entidad)
      .subscribe(data => {this.tipousuarios = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  verTipousuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipousuario/ver", id])
  }

  editarTipousuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipousuario/editar",id])
  }

  eliminarTipousuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipousuario/eliminar",id])
  }


}
