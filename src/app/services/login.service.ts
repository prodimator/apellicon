import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }


  private apiKey = "45ecccdeb91c417094008089060a77aa";
  
  private url = "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/";
  //private url = "https://www.bungie.net/en/OAuth/Authorize";

  login(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('X-API-Key', this.apiKey);
    return this.http.get<any>(this.url, {headers: headers} );
  }
}
