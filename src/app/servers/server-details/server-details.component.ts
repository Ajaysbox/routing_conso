import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {
  id:number;
  server:{id:number,name:string,status:string};
  allowEdit:boolean=false;
  constructor(private serverService:ServerService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //this.server = this.serverService.getServer(0);
    this.id = this.activateRoute.snapshot.params['id'];
    this.activateRoute.params.subscribe(
      (params:Params)=>{
        this.id = params['id'];
      }
    );
    this.server = this.serverService.getServer(this.id-1);

    this.activateRoute.queryParams.subscribe(
      (params:Params)=>{
        this.allowEdit = params['allowEdit'] === '1'?true:false;
      }

    )
          console.log("allowEdit from querry params : "+this.allowEdit)
  }
  editServer(){
    this.router.navigate(['edit'],{relativeTo:this.activateRoute,queryParamsHandling:"preserve"})
  }
}
