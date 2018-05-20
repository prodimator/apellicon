import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { LoginService } from '../services/login.service';


 
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  //heroes: Hero[] = [];
 
  constructor(private loginService: LoginService) { }
  
  private url: string;

  
 
  ngOnInit() {
    this.url = this.loginService.make_authorization_url()
    console.log("url", this.url)
  }

}