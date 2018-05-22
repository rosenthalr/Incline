
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// This specifies what the client expects to recieve back (json)
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CreateAccountService {
  public apiUrl = 'https://ec2-35-168-103-149.compute-1.amazonaws.com/addUser';
  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's login input values as a parameter (username and password)
  // and then checks to see if an account with those credentials exist
  createaccount(user) {
    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.apiUrl, body, httpOptions);
  }
}
