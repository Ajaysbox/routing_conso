import { ServerService } from './servers/server.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{RouterModule} from '@angular/router';
import{FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerDetailsComponent } from './servers/server-details/server-details.component';
import { EditComponent } from './servers/edit/edit.component';
import {UsersComponent} from './users/users.component';
import { UserComponent } from './users/user/user.component'

const appRoute = [{path:"",component:HomeComponent},
{path:"servers",component:ServersComponent},
{path:"users/:id/:name",component:UsersComponent},
{path:"servers/:id/edit",component:EditComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ServerDetailsComponent,
    EditComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
