import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { PlistSerieComponent } from './Serie/plist/plist.component';
import { NewSerieComponent } from './Serie/new/new.component';
import { PlistGeneroComponent } from './Genero/plist/plist.component';
import { ViewGeneroComponent } from './Genero/view/view.component';
import { NewGeneroComponent } from './Genero/new/new.component';
import { EditGeneroComponent } from './Genero/edit/edit.component';
import { DeleteGeneroComponent } from './Genero/delete/delete.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path:'serie/lista', component: PlistSerieComponent},
  {path:'serie/agregar', component: NewSerieComponent},
  {path:'genero/lista', component: PlistGeneroComponent},
  {path:'genero/ver/:id', component: ViewGeneroComponent},
  {path:'genero/agregar', component: NewGeneroComponent},
  {path:'genero/editar/:id', component: EditGeneroComponent},
  {path:'genero/eliminar/:id', component: DeleteGeneroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
