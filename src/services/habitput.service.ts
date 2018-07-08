import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HabitPutService {

  public apiUrl = 'http://localhost:7000/habitaction';


  // public apiUrl = 'https://ec2-35-168-103-149.compute-1.amazonaws.com/habitaction';
  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) { }

  // This function takes the user's updated password and does a post operation
  habitput(habit) {
    return this.http.put<any>(`${this.apiUrl}/${habit._id}`, habit, {withCredentials: true}).map((res:Response) => res);
  }

}
