import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

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

  plistTipousuario() {
    this.router.navigate(["tipousuario/lista"])
  }
}
