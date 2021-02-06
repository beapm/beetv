import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../app/Service/service.service';
import { PaginatePipe } from './Pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewComponent } from './Serie/new/new.component';
import { EditComponent } from './Serie/edit/edit.component';
import { PlistComponent } from './Serie/plist/plist.component';
import { DeleteComponent } from './Serie/delete/delete.component';
import { CustomMatPaginatorIntl } from './paginator-es';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    NewComponent,
    EditComponent,
    PlistComponent,
    DeleteComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatPaginatorModule
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
