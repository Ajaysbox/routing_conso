import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "app/auth.service";

@Injectable()
export class AuthGaurd implements CanActivate ,CanActivateChild{

    constructor(private authService:AuthService,private router:Router){  }

    canActivate(route:ActivatedRouteSnapshot,
         state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        // canActivate interface will return an observable or promise or boolean
        //can run async(returns promise/observable) or syncronoiusly
       return  this.authService.isAuthenticated()
        .then(
            (authenticated:boolean)=>{
                if(authenticated){
                   return true; 
                }else{
                   this.router.navigate(['/']);
                   console.log("no login..navigating away!");
                }
            }
        )
    }
    canActivateChild(route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state);
    }
}