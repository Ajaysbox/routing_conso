import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  server:{id:number,name:string,status:string}
  serverName:string='';
  serverStatus:string='';
  constructor(private serverService:ServerService) { }

  ngOnInit() {
    this.server = this.serverService.getServer(0);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log(this.server.status)
  }
  updateServer(){
    this.serverService.updateServer(this.server.id,{name:this.serverName,status:this.serverStatus});
  }
}
