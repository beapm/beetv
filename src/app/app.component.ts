import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beetv';

  constructor(private router:Router){}

  plistSerie() {
    this.router.navigate(["plistSerie"])
  }
}
