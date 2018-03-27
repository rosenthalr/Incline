import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

 
@Injectable()
export class LoginService {
 
  constructor(public http: Http) { }
 
  getUsers(){
    return this.http.get('../assets/data.json')
            .map(response => response.json());
  }
}