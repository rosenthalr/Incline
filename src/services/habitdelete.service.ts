import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HabitDeleteService {

  public apiUrl = 'https://goals.digitalstudio.io/habitaction';
<<<<<<< HEAD
  // public apiUrl = 'http://localhost:7000/habitaction';
=======
  //public apiUrl = 'http://localhost:7000/habitaction';
>>>>>>> dd59ad5e2302eff616e6cc210b4ae83ac859e9d5
  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's updated password and does a post operation
  habitdelete(habit) {
    return this.http.delete<any>(`${this.apiUrl}/${habit._id}`, {withCredentials: true},).map((res:Response) => res);
  }
}
