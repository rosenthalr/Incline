import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// This specifies what the client expects to recieve back (json)
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ForgotService {

  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's login input values as a parameter (username and password)
  // and then checks to see if an account with those credentials exist
  forgotUser(user) {
   // var apiString = 'http://localhost:7000/forgot';
    let body = JSON.stringify(user);
    return this.http.post('http://localhost:7000/forgot', body, httpOptions);
    // return this.http.post('https://goals.digitalstudio.io/forgot', body, httpOptions);
  }
}
