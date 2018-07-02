import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// This specifies what the client expects to recieve back (json)
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ResetService {


  public apiUrl = 'https://goals.digitalstudio.io/moreReset';
  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's updated password and does a PUT operation
    resetUser(user) {
    let body = JSON.stringify(user);
    return this.http.put(this.apiUrl, body, httpOptions);
  }
}
