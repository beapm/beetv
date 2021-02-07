import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Serie } from '../../Entities/Serie';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  series:Serie[] | undefined;

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getSeries()
    .subscribe(data => {this.series = data;});
  }

 

}
