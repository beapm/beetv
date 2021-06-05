import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../app/Service/service.service';
import { PaginatePipe } from './Pipes/paginate.pipe';
import { CustomMatPaginatorIntl } from './paginator-es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReadmoreComponent } from './components/readmore/readmore.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from './Service/helper.service';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { MenuComponent } from './components/menu/menu.component';
import { BusquedaComponent } from './common/busqueda/busqueda.component';

import { PlistSerieComponent } from './Serie/plist/plist.component';
import { NewSerieComponent } from './Serie/new/new.component';
import { ViewSerieComponent } from './Serie/view/view.component';
import { EditSerieComponent } from './Serie/edit/edit.component';
import { DeleteSerieComponent } from './Serie/delete/delete.component';

import { PlistGeneroComponent } from './Genero/plist/plist.component';
import { NewGeneroComponent } from './Genero/new/new.component';
import { ViewGeneroComponent } from './Genero/view/view.component';
import { EditGeneroComponent } from './Genero/edit/edit.component';
import { DeleteGeneroComponent } from './Genero/delete/delete.component';

import { PlistTipousuarioComponent } from './Tipousuario/plist/plist.component';
import { ViewTipousuarioComponent } from './Tipousuario/view/view.component';
import { EditTipousuarioComponent } from './Tipousuario/edit/edit.component';
import { DeleteTipousuarioComponent } from './Tipousuario/delete/delete.component';

import { PlistUsuarioComponent } from './Usuario/plist/plist.component';
import { NewUsuarioComponent } from './Usuario/new/new.component';
import { ViewUsuarioComponent } from './Usuario/view/view.component';
import { EditUsuarioComponent } from './Usuario/edit/edit.component';
import { DeleteUsuarioComponent } from './Usuario/delete/delete.component';

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

import { PlistPuntuacionserieComponent } from './Puntuacionserie/plist/plist.component';
import { NewPuntuacionserieComponent } from './Puntuacionserie/new/new.component';
import { ViewPuntuacionserieComponent } from './Puntuacionserie/view/view.component';
import { EditPuntuacionserieComponent } from './Puntuacionserie/edit/edit.component';
import { DeletePuntuacionserieComponent } from './Puntuacionserie/delete/delete.component';

import { PlistListaComponent } from './Lista/plist/plist.component';
import { NewListaComponent } from './Lista/new/new.component';
import { ViewListaComponent } from './Lista/view/view.component';
import { EditListaComponent } from './Lista/edit/edit.component';
import { DeleteListaComponent } from './Lista/delete/delete.component';

import { PlistContenidolistaComponent } from './Contenidolista/plist/plist.component';
import { NewContenidolistaComponent } from './Contenidolista/new/new.component';
import { ViewContenidolistaComponent } from './Contenidolista/view/view.component';
import { EditContenidolistaComponent } from './Contenidolista/edit/edit.component';
import { DeleteContenidolistaComponent } from './Contenidolista/delete/delete.component';
import { InformeslistaComponent } from './components/informeslista/informeslista.component';
import { NuevoUsuarioComponent } from './common/login/nuevo-usuario/nuevo-usuario.component';
import { PerfilComponent } from './Usuario/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    NewSerieComponent,
    EditSerieComponent,
    PlistSerieComponent,
    DeleteSerieComponent,
    ViewSerieComponent,
    PaginatePipe,
    NewGeneroComponent,
    PlistGeneroComponent,
    ViewGeneroComponent,
    DeleteGeneroComponent,
    EditGeneroComponent,
    ViewTipousuarioComponent,
    DeleteTipousuarioComponent,
    EditTipousuarioComponent,
    PlistTipousuarioComponent,
    ReadmoreComponent,
    NewUsuarioComponent,
    PlistUsuarioComponent,
    DeleteUsuarioComponent,
    EditUsuarioComponent,
    ViewUsuarioComponent,
    PlistTemporadaComponent,
    NewTemporadaComponent,
    EditTemporadaComponent,
    DeleteTemporadaComponent,
    ViewTemporadaComponent,
    EditTemporadaComponent,
    PlistCapituloComponent,
    NewCapituloComponent,
    EditCapituloComponent,
    ViewCapituloComponent,
    DeleteCapituloComponent,
    PlistCapitulosvistosComponent,
    NewCapitulosvistosComponent,
    EditCapitulosvistosComponent,
    ViewCapitulosvistosComponent,
    DeleteCapitulosvistosComponent,
    PlistPuntuacionserieComponent,
    NewPuntuacionserieComponent,
    EditPuntuacionserieComponent,
    ViewPuntuacionserieComponent,
    DeletePuntuacionserieComponent,
    PlistListaComponent,
    NewListaComponent,
    EditListaComponent,
    ViewListaComponent,
    DeleteListaComponent,
    PlistContenidolistaComponent,
    NewContenidolistaComponent,
    EditContenidolistaComponent,
    ViewContenidolistaComponent,
    DeleteContenidolistaComponent,
    InformeslistaComponent,
    NuevoUsuarioComponent,
    PerfilComponent,
    BusquedaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgbModule,
    NgxStarRatingModule
  ],
  providers: [
    ServiceService, HelperService,
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
