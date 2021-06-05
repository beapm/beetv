import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/Entities/Serie';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  series: Serie = new Serie();

  puntuacion: number;
  rating2: number;
  nota: number; 

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    let nombre=localStorage.getItem("nombre");
    this.service.busqueda(nombre).subscribe(data=>{
      console.log("prueba busqueda", data.content);
      this.series=data.content;
    })
  }


  obtenerPuntuacion(id: number) {
    this.service.puntuacionSerie(id)
    .subscribe(data=>{
      this.nota =data;
      this.rating2=Math.floor(data);
      this.puntuacion=this.rating2;
    })
  }

  verSerie(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["serie/ver", id])
  }
}


