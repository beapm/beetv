import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolverService } from '../app/Service/resolver.service';

import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';

import { PlistSerieComponent } from './Serie/plist/plist.component';
import { ViewSerieComponent } from './Serie/view/view.component';
import { NewSerieComponent } from './Serie/new/new.component';
import { EditSerieComponent } from './Serie/edit/edit.component';
import { DeleteSerieComponent } from './Serie/delete/delete.component';

import { PlistGeneroComponent } from './Genero/plist/plist.component';
import { ViewGeneroComponent } from './Genero/view/view.component';
import { NewGeneroComponent } from './Genero/new/new.component';
import { EditGeneroComponent } from './Genero/edit/edit.component';
import { DeleteGeneroComponent } from './Genero/delete/delete.component';

import { PlistTipousuarioComponent } from './Tipousuario/plist/plist.component';
import { DeleteTipousuarioComponent } from './Tipousuario/delete/delete.component';
import { EditTipousuarioComponent } from './Tipousuario/edit/edit.component';
import { ViewTipousuarioComponent } from './Tipousuario/view/view.component';

import { PlistUsuarioComponent } from './Usuario/plist/plist.component';
import { DeleteUsuarioComponent } from './Usuario/delete/delete.component';
import { EditUsuarioComponent } from './Usuario/edit/edit.component';
import { NewUsuarioComponent } from './Usuario/new/new.component';
import { ViewUsuarioComponent } from './Usuario/view/view.component';

import { PlistTemporadaComponent } from './Temporada/plist/plist.component';
import { NewTemporadaComponent } from './Temporada/new/new.component';
import { ViewTemporadaComponent } from './Temporada/view/view.component';
import { EditTemporadaComponent } from './Temporada/edit/edit.component';
import { DeleteTemporadaComponent } from './Temporada/delete/delete.component';

import { PlistCapituloComponent } from './Capitulo/plist/plist.component';
import { NewCapituloComponent } from './Capitulo/new/new.component';
import { ViewCapituloComponent } from './Capitulo/view/view.component';
import { EditCapituloComponent } from './Capitulo/edit/edit.component';
import { DeleteCapituloComponent } from './Capitulo/delete/delete.component';

import { PlistCapitulosvistosComponent } from './Capitulosvistos/plist/plist.component';
import { NewCapitulosvistosComponent } from './Capitulosvistos/new/new.component';
import { ViewCapitulosvistosComponent } from './Capitulosvistos/view/view.component';
import { EditCapitulosvistosComponent } from './Capitulosvistos/edit/edit.component';
import { DeleteCapitulosvistosComponent } from './Capitulosvistos/delete/delete.component';

import { PlistContenidolistaComponent } from './Contenidolista/plist/plist.component';
import { NewContenidolistaComponent } from './Contenidolista/new/new.component';
import { ViewContenidolistaComponent } from './Contenidolista/view/view.component';
import { EditContenidolistaComponent } from './Contenidolista/edit/edit.component';
import { DeleteContenidolistaComponent } from './Contenidolista/delete/delete.component';

import { PlistListaComponent } from './Lista/plist/plist.component';
import { NewListaComponent } from './Lista/new/new.component';
import { ViewListaComponent } from './Lista/view/view.component';
import { EditListaComponent } from './Lista/edit/edit.component';
import { DeleteListaComponent } from './Lista/delete/delete.component';

import { PlistPuntuacionserieComponent } from './Puntuacionserie/plist/plist.component';
import { NewPuntuacionserieComponent } from './Puntuacionserie/new/new.component';
import { ViewPuntuacionserieComponent } from './Puntuacionserie/view/view.component';
import { EditPuntuacionserieComponent } from './Puntuacionserie/edit/edit.component';
import { DeletePuntuacionserieComponent } from './Puntuacionserie/delete/delete.component';

import { InformeslistaComponent } from './components/informeslista/informeslista.component'

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, resolve: { message: ResolverService } },
  { path: 'logout', component: LogoutComponent },

  { path: 'serie/lista', component: PlistSerieComponent },
  { path: 'serie/ver/:id', component: ViewSerieComponent, resolve: { message: ResolverService } },
  { path: 'serie/agregar', component: NewSerieComponent },
  { path: 'serie/editar/:id', component: EditSerieComponent },
  { path: 'serie/eliminar/:id', component: DeleteSerieComponent },

  { path: 'genero/lista', component: PlistGeneroComponent, resolve: { message: ResolverService } },
  { path: 'genero/ver/:id', component: ViewGeneroComponent },
  { path: 'genero/agregar', component: NewGeneroComponent },
  { path: 'genero/editar/:id', component: EditGeneroComponent },
  { path: 'genero/eliminar/:id', component: DeleteGeneroComponent },

  { path: 'tipousuario/lista', component: PlistTipousuarioComponent },
  { path: 'tipousuario/ver/:id', component: ViewTipousuarioComponent },
  { path: 'tipousuario/editar/:id', component: EditTipousuarioComponent },
  { path: 'tipousuario/eliminar/:id', component: DeleteTipousuarioComponent },

  { path: 'usuario/lista', component: PlistUsuarioComponent, resolve: {message: ResolverService } },
  { path: 'usuario/ver/:id', component: ViewUsuarioComponent },
  { path: 'usuario/agregar', component: NewUsuarioComponent },
  { path: 'usuario/editar/:id', component: EditUsuarioComponent },
  { path: 'usuario/eliminar/:id', component: DeleteUsuarioComponent },

  { path: 'temporada/lista', component: PlistTemporadaComponent },
  { path: 'temporada/ver/:id', component: ViewTemporadaComponent },
  { path: 'temporada/agregar', component: NewTemporadaComponent },
  { path: 'temporada/editar/:id', component: EditTemporadaComponent },
  { path: 'temporada/eliminar/:id', component: DeleteTemporadaComponent },

  { path: 'capitulo/lista', component: PlistCapituloComponent },
  { path: 'capitulo/ver/:id', component: ViewCapituloComponent },
  { path: 'capitulo/agregar', component: NewCapituloComponent },
  { path: 'capitulo/editar/:id', component: EditCapituloComponent },
  { path: 'capitulo/eliminar/:id', component: DeleteCapituloComponent },

  { path: 'capitulosvistos/lista', component: PlistCapitulosvistosComponent },
  { path: 'capitulosvistos/ver/:id', component: ViewCapitulosvistosComponent },
  { path: 'capitulosvistos/agregar', component: NewCapitulosvistosComponent },
  { path: 'capitulosvistos/editar/:id', component: EditCapitulosvistosComponent },
  { path: 'capitulosvistos/eliminar/:id', component: DeleteCapitulosvistosComponent },

  { path: 'puntuacionserie/lista', component: PlistPuntuacionserieComponent },
  { path: 'puntuacionserie/ver/:id', component: ViewPuntuacionserieComponent },
  { path: 'puntuacionserie/agregar', component: NewPuntuacionserieComponent },
  { path: 'puntuacionserie/editar/:id', component: EditPuntuacionserieComponent },
  { path: 'puntuacionserie/eliminar/:id', component: DeletePuntuacionserieComponent },

  { path: 'lista/lista', component: PlistListaComponent, resolve: { message: ResolverService}},
  { path: 'lista/ver/:id', component: ViewListaComponent },
  { path: 'lista/agregar', component: NewListaComponent },
  { path: 'lista/editar/:id', component: EditListaComponent },
  { path: 'lista/eliminar/:id', component: DeleteListaComponent },

  { path: 'contenidolista/lista', component: PlistContenidolistaComponent },
  { path: 'contenidolista/ver/:id', component: ViewContenidolistaComponent },
  { path: 'contenidolista/agregar', component: NewContenidolistaComponent },
  { path: 'contenidolista/editar/:id', component: EditContenidolistaComponent },
  { path: 'contenidolista/eliminar/:id', component: DeleteContenidolistaComponent },

  { path: 'informes', component: InformeslistaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
