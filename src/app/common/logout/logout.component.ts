import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Entities/Usuario';
import { HelperService } from 'src/app/Service/helper.service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  usuario: Usuario=new Usuario;
  
  message: any;
  editMessage: number = null;

  constructor(private service:ServiceService, private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute, private helper: HelperService) { 
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("Sesión activa", this.activatedRoute.snapshot.data.message);
    } else {
      console.log("Sin sesión", this.activatedRoute.snapshot.data.message)
      this.usuario = this.activatedRoute.snapshot.data.message;
      this.router.navigate(['home'])
    }
  }

  ngOnInit(): void {
  }

  logout() {
    this.service.logout()
    .subscribe(data=>{
      console.log(data);
      this.helper.changeMessage(this.editMessage);
      this.router.navigate(['home'])
    })
  }

}
