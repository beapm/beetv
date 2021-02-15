import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistUsuarioComponent implements OnInit {

  usuarios: Usuario[] = Array();

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
    let entidad="usuario"
    this.service.getPlist(entidad)
      .subscribe(
        (data) => {this.usuarios = data,
            setTimeout(() => { this.router.navigate(['usuario/lista']); }, 2000);
        },
        (error) => {
            this.router.navigate(['home']);;
        }
      )
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [10, 20, 50, 100, 200];

  ver(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/ver", id])
  }

  editar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/editar",id])
  }

  eliminar(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/eliminar",id])
  }


}
