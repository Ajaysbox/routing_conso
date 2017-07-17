import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {
server:{id:number,name:string,status:string}
  constructor(private serverService:ServerService) { }

  ngOnInit() {
    this.server = this.serverService.getServer(0);
  }

}
