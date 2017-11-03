import { ServerService } from './servers/server.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import{FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerDetailsComponent } from './servers/server-details/server-details.component';
import { EditComponent } from './servers/edit/edit.component';
import {UsersComponent} from './users/users.component';
import { UserComponent } from './users/user/user.component'
import { UserService } from "app/users/user.service";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { AppRoutingModule } from "app/app-routing.module";
import { AuthGaurd } from "app/auth-gaurd.service";
import { AuthService } from "app/auth.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ServerDetailsComponent,
    EditComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  
  ],
  providers: [ServerService,UserService,AuthService,AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
