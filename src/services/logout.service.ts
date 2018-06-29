import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the LogoutService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LogoutService {

  constructor(public http: HttpClient) {
    console.log('Hello LogoutService');
  }

  logout(user) {
    let body = JSON.stringify(user);
    // return this.http.post('http://localhost:7000/logout', body, httpOptions);
    return this.http.post('https://goals.digitalstudio.io/logout', body, httpOptions);
  }

}
