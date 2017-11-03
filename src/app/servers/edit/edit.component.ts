import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number;
  server:{id:number,name:string,status:string}
  serverName:string='';
  serverStatus:string='';
  changesSaved:boolean=false;
  constructor(private serverService:ServerService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
    //console.log(this.server.status)

    this.id = this.activateRoute.snapshot.params['id'];

    this.activateRoute.params.subscribe(
      (params:Params)=>{
        this.id = params['id'];
      }

    );
    this.server = this.serverService.getServer(this.id-1);
    console.log(this.id+"   "+this.server);
     this.serverName = this.server.name;
     this.serverStatus = this.server.status;

  }
  updateServer(){
    this.serverService.updateServer(this.server.id,{name:this.serverName,status:this.serverStatus});
    this.changesSaved = true;
    //TODO
    this.router.navigate(['../'],{relativeTo:this.activateRoute})
  }
}
