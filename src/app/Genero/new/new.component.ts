import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Entities/Genero';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewGeneroComponent implements OnInit {

  genero: Genero = new Genero;
  entidad="genero";

  formulario: FormGroup;

  constructor(private service:ServiceService, private router: Router, private _location: Location, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
    })
   }

  ngOnInit(): void {
  }
  
  guardarGenero() {
    this.service.add(this.entidad, this.formulario.value)
    .subscribe(
        (data) => {this.router.navigate(['genero/lista'])},
        (error) => {this.router.navigate(['home'])}
      )
  }

  atras() {
    this._location.back();
  }

}
