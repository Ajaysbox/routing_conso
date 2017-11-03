import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "app/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }
  loadServers(){
    this.router.navigate(['/servers'])
  }
  loadServer(id:number){
    this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'})
  }
  login(){
    this.authService.login();
  }
  logOut(){
    this.authService.logOut()
  }
}
