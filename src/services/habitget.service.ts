import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HabitGetService {

  public apiUrl = 'http://ec2-35-168-103-149.compute-1.amazonaws.com/habitaction';
  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's updated password and does a post operation
  habitget() {
    return this.http.get<any>(this.apiUrl, {withCredentials: true});
  }
}
