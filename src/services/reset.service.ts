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
  // public apiUrl = 'https://ec2-35-168-103-149.compute-1.amazonaws.com/moreReset';
  public apiUrl = 'https://goals.digitalstudio.io/moreReset';



  // public apiUrl = ' http://localhost:7000/moreReset';
  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's updated password and does a PUT operation
    resetUser(user) {
    let body = JSON.stringify(user);
    return this.http.put(this.apiUrl, body, httpOptions);
  }
}
