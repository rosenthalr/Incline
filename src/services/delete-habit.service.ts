import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';
/*
  Generated class for the DeleteHabitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeleteHabitService {

  public apiUrl = 'https://goals.digitalstudio.io/habitaction';

  // Inject HttpClient module into service so can make Rest API calls
  constructor(public http: HttpClient) {}

  // This function deletes a user's habit
  deleteHabit(habit) {
    return this.http.delete<any>(`${this.apiUrl}/${habit._id}`, {withCredentials: true})
                  .map((res:Response) => res);
  }

}
