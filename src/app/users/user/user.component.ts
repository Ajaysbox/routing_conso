import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { UserService } from "app/users/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
id:number;
user:{id:number,name:string}
  constructor(private route:ActivatedRoute,private userService:UserService) { }


  ngOnInit() {

      this.id = this.route.snapshot.params['id'];
      this.user = this.userService.getUser(this.id-1);
      this.route.params.subscribe((params:Params)=>{

        this.id = params['id'];
        this.user = this.userService.getUser(this.id-1);

    });

  }

}
