import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { NewTipousuarioComponent } from './Tipousuario/new/new.component';
import { ViewTipousuarioComponent } from './Tipousuario/view/view.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},

  {path:'serie/lista', component: PlistSerieComponent},
  {path:'serie/ver/:id', component: ViewSerieComponent},
  {path:'serie/agregar', component: NewSerieComponent},
  {path:'serie/editar/:id', component: EditSerieComponent},
  {path:'serie/eliminar/:id', component: DeleteSerieComponent},

  {path:'genero/lista', component: PlistGeneroComponent},
  {path:'genero/ver/:id', component: ViewGeneroComponent},
  {path:'genero/agregar', component: NewGeneroComponent},
  {path:'genero/editar/:id', component: EditGeneroComponent},
  {path:'genero/eliminar/:id', component: DeleteGeneroComponent},

  {path:'tipousuario/lista', component: PlistTipousuarioComponent},
  {path:'tipousuario/ver/:id', component: ViewTipousuarioComponent},
  {path:'tipousuario/agregar', component: NewTipousuarioComponent},
  {path:'tipousuario/editar/:id', component: EditTipousuarioComponent},
  {path:'tipousuario/eliminar/:id', component: DeleteTipousuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
