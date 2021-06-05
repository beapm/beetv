import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'src/app/Entities/Serie';
import { Usuario } from 'src/app/Entities/Usuario';
import { HelperService } from 'src/app/Service/helper.service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: Usuario=new Usuario;
  visible: String | null;

  busquedaInput: String;

  message: any;
  messageUsu: any;
  messageUsuarioID: any;

  series: Serie[] = Array();

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private helper: HelperService, private service: ServiceService) {
    if (!this.activatedRoute.snapshot.data.message) {
      console.log("Sin sesión", this.activatedRoute.snapshot.data.message);
    } else {
      console.log("Sesión activa", this.activatedRoute.snapshot.data.message)
      this.usuario = this.activatedRoute.snapshot.data.message.body;
      console.log("menu", this.usuario)
      router.navigate(['home']);
    }

   }

  ngOnInit(): void {
    this.helper.customMessage.subscribe((msg) => {
      this.message = msg;
    });

    this.helper.customMessageUsuario.subscribe((msg)=> {
      this.messageUsu = msg;
    })

    this.helper.customMessageUsuarioID.subscribe((msg)=> {
      this.messageUsuarioID = msg;
    })
  }
  
  buscarSerie(nombre: String) {
    localStorage.setItem("nombre", nombre.toString());
    this.router.navigate(["busqueda", nombre]);

    this.busquedaInput='';
  }

  plistSerie() {
    this.router.navigate(["serie/lista"])
  }

  addSerie() {
    this.router.navigate(["serie/agregar"])
  }

  plistGenero() {
    this.router.navigate(["genero/lista"])
  }

  addGenero() {
    this.router.navigate(["genero/agregar"])
  }
  
  plistUsuario() {
    this.router.navigate(["usuario/lista"])
  }

  addUsuario() {
    this.router.navigate(["usuario/agregar"])
  }

  plistTipousuario() {
    this.router.navigate(["tipousuario/lista"])
  }
  
  plistTemporada() {
    this.router.navigate(["temporada/lista"])
  }

  addTemporada() {
    this.router.navigate(["temporada/agregar"])
  }
    
  plistCapitulo() {
    this.router.navigate(["capitulo/lista"])
  }

  addCapitulo() {
    this.router.navigate(["capitulo/agregar"])
  }
    
  plistCapitulovistos() {
    this.router.navigate(["capitulosvistos/lista"])
  }

  addCapitulovistos() {
    this.router.navigate(["capitulosvistos/agregar"])
  }
    
  plistPuntuacionserie() {
    this.router.navigate(["puntuacionserie/lista"])
  }

  addPuntuacionserie() {
    this.router.navigate(["puntuacionserie/agregar"])
  }
    
  plistLista() {
    this.router.navigate(["lista/lista"])
  }

  addLista() {
    this.router.navigate(["lista/agregar"])
  }
    
  plistContenidolista() {
    this.router.navigate(["contenidolista/lista"])
  }

  addContenidolista() {
    this.router.navigate(["contenidolista/agregar"])
  }
  
  perfilUsuario(id: number) {
    this.router.navigate(["usuario/perfil", this.messageUsuarioID])
  }
}
