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
  
  public loginMessage: string
 
  constructor(private loginService: LoginService) {
    this.loginMessage = " ";
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
