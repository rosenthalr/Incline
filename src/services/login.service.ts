import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }; 

@Injectable()
export class LoginService {
  constructor(public http: HttpClient) { }

  login(user) {
    let body = JSON.stringify(user);
    return this.http.post('http://localhost:7000/login', body);
  }

}