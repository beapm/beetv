import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Entities/Usuario';
import { HelperService } from 'src/app/Service/helper.service';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario;
  tipousu: number = 0;

  message: any;
  editMessage: number = 1;

  messageUsu: any;
  editMessageUsu: String = null;
  
  messageID: any;
  editMessageID: number = 1;
  
  constructor(private service:ServiceService, private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute, private helper: HelperService) {
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("Sin sesión", this.activatedRoute.snapshot.data.message);
    } else {
      console.log("Sesión activa", this.activatedRoute.snapshot.data.message)
    }
   }


  ngOnInit(): void {
  }

  login() {
    let objeto=JSON.stringify(this.usuario);
    this.service.loginUsuario(objeto).subscribe(data => { 
      this.usuario = data.body;
      this.editMessage=this.usuario.tipousuario.id;
      this.editMessageUsu=this.usuario.login;
      this.editMessageID=this.usuario.id;

      this.helper.changeMessage(this.editMessage);
      this.helper.changeUsuario(this.editMessageUsu);
      this.helper.changeUsuarioID(this.editMessageID);

      this.router.navigate(['home']);
    }); 

  }  

  nuevoUsuario() {
    this.router.navigate(['registro']);
  }
}
 