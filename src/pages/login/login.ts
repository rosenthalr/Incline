import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../../services/login.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
})

export class LoginPage {
  
  public loginMessage: string;
  public active: boolean;
  public email: string;
  public password: string;
  public isComplete: boolean;

  constructor(private loginService: LoginService) {
    this.loginMessage = " ";
    this.active = false;
    this.isComplete = false;
  }

  checkIfComplete(userInfo, field) {

    if(field == 'email') {
      this.email = userInfo;
    } else {
      this.password = userInfo;
    }

    if(this.email && this.password) {
       this.active = true;
       this.isComplete = true;
     } else {
       this.active = false;
       this.isComplete = false;
     }
  }

  login(userInfo) {
      let user = {
        username: userInfo.email,
        password: userInfo.password
      };

    this.loginService.login(user).subscribe(
      data => {

        // log the success message to the console
        console.log(data);

        // Not sure why I need to return true, but it doesn't work when I remove it
        return true;
      },
      error => {
        console.error("Error logging in user!");
        return Observable.throw(error);
      }
    );
  }

}
