import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HabitPostService {

  public apiUrl = 'https://goals.digitalstudio.io/habitaction';
  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's updated password and does a post operation
  habitpost(habit) {
    return this.http.post<any>(this.apiUrl, habit, {withCredentials: true});
  }
}
