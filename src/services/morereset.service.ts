import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MoreResetService {

  // public apiUrl = 'https://ec2-35-168-103-149.compute-1.amazonaws.com/moreReset';
  // public apiUrl = ' http://localhost:7000/moreReset';
   public apiUrl = 'https://goals.digitalstudio.io/moreReset';

  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's updated password and does a post operation
  resetuser(user) {
    return this.http.post<any>(this.apiUrl, user, { withCredentials: true });
  }
}
