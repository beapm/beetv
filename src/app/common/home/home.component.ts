import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Serie } from 'src/app/Entities/Serie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  series:Serie[] = Array();
  entidad="serie";
  showMore = false;

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
    .subscribe(data => {this.series = data;});
  }

  verSerie(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["serie/ver", id])
  }

}
