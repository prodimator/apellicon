import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private itemName: any;
  private itemDescription: any;

  constructor( private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.login().subscribe(data => {
      this.itemName = data.Response.data.inventoryItem.itemName; 
      this.itemDescription = data.Response.data.inventoryItem.itemDescription;
      //console.log("login data",this.loginData.Response.data.inventoryItem.itemName);
    });
  }

}
