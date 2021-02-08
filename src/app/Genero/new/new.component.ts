import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Entities/Genero';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewGeneroComponent implements OnInit {

  genero: Genero = new Genero;
  entidad="genero";

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }
  
  guardarGenero() {
    let objeto=JSON.stringify(this.genero);
     this.service.add(this.entidad, objeto)
    .subscribe(data=> {
      alert("Agregado con éxito");
      this.router.navigate(["genero/lista"]);
    })
  }

  atras() {
    this._location.back();
  }

}
