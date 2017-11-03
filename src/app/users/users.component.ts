import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "app/users/user.service";
import { Observable } from "rxjs/Rx";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit , OnDestroy{
  mySubscription:Subscription
users:{id:number,name:string}[];
  constructor(private userService:UserService) { }

  ngOnInit() {

    //   const myObservable = Observable.create((observer:Observer<string>)=>{
    //     setTimeout(()=>{
    //         observer.next('first package');
    //       },2000);

    //       setTimeout(()=>{
    //         observer.next('second package')
    //       },4000);
      
    //       setTimeout(()=>{
    //         observer.complete()
    //       },5000);

    //       setTimeout(()=>{
    //         observer.error('error!')
    //       },6000);
    //     });
    //  this.mySubscription   = myObservable.subscribe(
    //      (data:string)=>{ console.log(data);},
    //      ()=>{console.log('completed')},
    //      (error:string)=>{console.log('errorer')}
    //      )
    }
    ngOnDestroy(){
      //this.mySubscription.unsubscribe()
    }
}
