import { ServerService } from './server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
//servers:{id:number,name:string,status:string}[] = [];
servers:Array<{id:number,name:string,status:string}> = [];
  constructor(private serverService:ServerService) { }

  ngOnInit() {
   this.servers =  this.serverService.getServers();
  }

}
