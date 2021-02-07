import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Entities/Genero';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditGeneroComponent implements OnInit {

  genero: Genero = new Genero();
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.editarGenero();
  }

  plistGenero() {
    this.router.navigate(["genero/lista"])
  }

  editarGenero() {
    let id=localStorage.getItem("id");
    this.service.getGeneroById(+id)
    .subscribe(data=>{
      this.genero=data;
    })
  }
  
  actualizarGenero(genero:Genero) {
    this.service.updateGenero(genero)
    .subscribe(data=>{
      this.genero=data;
      alert("Actualizado con éxito");
      this.router.navigate(["genero/lista"])
    })
  }
}
