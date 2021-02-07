import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { PlistSerieComponent } from './Serie/plist/plist.component';
import { NewSerieComponent } from './Serie/new/new.component';
import { PlistGeneroComponent } from './Genero/plist/plist.component';
import { NewGeneroComponent } from './Genero/new/new.component';
import { EditGeneroComponent } from './Genero/edit/edit.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path:'serie/lista', component: PlistSerieComponent},
  {path:'serie/agregar', component: NewSerieComponent},
  {path:'genero/lista', component: PlistGeneroComponent},
  {path:'genero/agregar', component: NewGeneroComponent},
  {path:'genero/editar/:id', component: EditGeneroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
