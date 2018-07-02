import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HabitPostService {

<<<<<<< HEAD
  // public apiUrl = 'http://localhost:7000/habitaction';
=======
  //public apiUrl = 'http://localhost:7000/habitaction';
>>>>>>> dd59ad5e2302eff616e6cc210b4ae83ac859e9d5
  public apiUrl = 'https://goals.digitalstudio.io/habitaction';
  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's updated password and does a post operation
  habitpost(habit) {
    return this.http.post<any>(this.apiUrl, habit, {withCredentials: true});
  }
}
