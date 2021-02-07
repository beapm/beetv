import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Entities/Genero';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewGeneroComponent implements OnInit {

  genero: Genero = new Genero;

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  
  guardarGenero() {
    let parameter=JSON.stringify(this.genero);
     this.service.addGenero(parameter)
    .subscribe(data=> {
      alert("Agregado con éxito");
      console.log(data);
      this.router.navigate(["genero/lista"]);
    })
  }

}
