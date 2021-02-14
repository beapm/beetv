import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Entities/Usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: Usuario=new Usuario;
  status: string;

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { 
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("no hay session", this.activatedRoute.snapshot.data.message)
      this.status=this.activatedRoute.snapshot.data.status;

    } else {
      console.log("si hay session", this.activatedRoute.snapshot.data.message)
      this.usuario = this.activatedRoute.snapshot.data.message;
      console.log(this.usuario)
    }
  }

  ngOnInit(): void {
  }
   
  plistSerie() {
    this.router.navigate(["serie/lista"])
  }

  addSerie() {
    this.router.navigate(["serie/agregar"])
  }

  plistGenero() {
    this.router.navigate(["genero/lista"])
  }

  addGenero() {
    this.router.navigate(["genero/agregar"])
  }
  
  plistUsuario() {
    this.router.navigate(["usuario/lista"])
  }

  addUsuario() {
    this.router.navigate(["usuario/agregar"])
  }

  plistTipousuario() {
    this.router.navigate(["tipousuario/lista"])
  }
    
  plistTemporada() {
    this.router.navigate(["temporada/lista"])
  }

  addTemporada() {
    this.router.navigate(["temporada/agregar"])
  }
    
  plistCapitulo() {
    this.router.navigate(["capitulo/lista"])
  }

  addCapitulo() {
    this.router.navigate(["capitulo/agregar"])
  }
    
  plistCapitulovistos() {
    this.router.navigate(["capitulosvistos/lista"])
  }

  addCapitulovistos() {
    this.router.navigate(["capitulosvistos/agregar"])
  }
    
  plistPuntuacionserie() {
    this.router.navigate(["puntuacionserie/lista"])
  }

  addPuntuacionserie() {
    this.router.navigate(["puntuacionserie/agregar"])
  }
    
  plistLista() {
    this.router.navigate(["lista/lista"])
  }

  addLista() {
    this.router.navigate(["lista/agregar"])
  }
    
  plistContenidolista() {
    this.router.navigate(["contenidolista/lista"])
  }

  addContenidolista() {
    this.router.navigate(["contenidolista/agregar"])
  }
  
}
