
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

  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }
  createaccount(user) {
    let body = JSON.stringify(user);
    return this.http.post('http://localhost:7000/create-account', body, httpOptions);
  }

}
