import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { encode } from 'punycode';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  private state: string;
  private state_params: any;

  private apiKey = "45ecccdeb91c417094008089060a77aa";
  
  //private url = "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/";
  private url = "https://www.bungie.net/en/OAuth/Authorize?/client_id=23817";
  //private url: "https://www.bungie.net/en/OAuth/Authorize?client_id=23817&response_type=code";

    make_authorization_url(){
      this.state = uuid();
      this.state_params = {'state': this.state};
      this.save_created_state(this.state);
      console.log(encodeURI(this.state_params.state));
      return this.url + encodeURI(this.state_params);
    }
  
    save_created_state(state){
      sessionStorage.setItem("state_token", JSON.stringify(state));
    }


  login(): Observable<any> {
    //this.url += this.state_params.state;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('X-API-Key', this.apiKey);

    return this.http.get<any>(this.url, {headers: headers} );
  }
}
