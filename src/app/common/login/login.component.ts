import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario=new Usuario;
  
  constructor(private service:ServiceService, private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) {
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("Sesión activa", this.activatedRoute.snapshot.data.message);
    } else {
      console.log("Sin sesión", this.activatedRoute.snapshot.data.message)
      this.usuario = this.activatedRoute.snapshot.data.message;
      console.log(this.usuario)
      router.navigate(['home'])
    }
   }

  ngOnInit(): void {
  }

  login() {
    let objeto=JSON.stringify(this.usuario);
    this.service.loginUsuario(objeto)
    .subscribe(data => { console.log(data.status);
    
    this.router.navigate(['home']);
    }); 

  }  
}
 