import { NgModule } from "@angular/core";
import { HomeComponent } from "app/home/home.component";
import { UsersComponent } from "app/users/users.component";
import { UserComponent } from "app/users/user/user.component";
import { ServersComponent } from "app/servers/servers.component";
import { ServerDetailsComponent } from "app/servers/server-details/server-details.component";
import { EditComponent } from "app/servers/edit/edit.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { Routes,RouterModule } from "@angular/router";
import { AuthGaurd } from "app/auth-gaurd.service";

const appRoute:Routes = [
{path:"",component:HomeComponent},
{path:"users",component:UsersComponent,children:[
  {path:":id",component:UserComponent}
]},

{path:"servers",
//canActivate:[AuthGaurd],
canActivateChild:[AuthGaurd],
component:ServersComponent,
children:[
  {path:":id", component:ServerDetailsComponent},
  {path:":id/edit",component:EditComponent}
]},
{path:"not-found",component:PageNotFoundComponent},
{path:"**", redirectTo:'/not-found'}

]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {


}