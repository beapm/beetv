import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../app/Service/service.service';
import { PaginatePipe } from './Pipes/paginate.pipe';
import { CustomMatPaginatorIntl } from './paginator-es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'

import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { MenuComponent } from './components/menu/menu.component';

import { NewSerieComponent } from './Serie/new/new.component';
import { EditComponent } from './Serie/edit/edit.component';
import { PlistSerieComponent } from './Serie/plist/plist.component';
import { DeleteComponent } from './Serie/delete/delete.component';
import { ViewComponent } from './Serie/view/view.component';

import { NewGeneroComponent } from './Genero/new/new.component';
import { PlistGeneroComponent } from './Genero/plist/plist.component';
import { ViewGeneroComponent } from './Genero/view/view.component';
import { EditGeneroComponent } from './Genero/edit/edit.component';
import { DeleteGeneroComponent } from './Genero/delete/delete.component';

import { NewTipousuarioComponent } from './Tipousuario/new/new.component';
import { PlistTipousuarioComponent } from './Tipousuario/plist/plist.component';
import { ViewTipousuarioComponent } from './Tipousuario/view/view.component';
import { EditTipousuarioComponent } from './Tipousuario/edit/edit.component';
import { DeleteTipousuarioComponent } from './Tipousuario/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    NewSerieComponent,
    EditComponent,
    PlistSerieComponent,
    DeleteComponent,
    PaginatePipe,
    ViewComponent,
    NewGeneroComponent,
    PlistGeneroComponent,
    ViewGeneroComponent,
    DeleteGeneroComponent,
    EditGeneroComponent,
    NewTipousuarioComponent,
    ViewTipousuarioComponent,
    DeleteTipousuarioComponent,
    EditTipousuarioComponent,
    PlistTipousuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [
    ServiceService,
    {
      provide: MatPaginatorIntl, 
      useClass: CustomMatPaginatorIntl
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
