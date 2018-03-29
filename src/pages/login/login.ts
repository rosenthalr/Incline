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
        email: userInfo.email,
        password: userInfo.password
      };

    this.loginService.login(user).subscribe(
      data => {
        // refresh the list
        console.log(data);
        return true;
      },
      error => {
        console.error("Error logging in user!");
        return Observable.throw(error);
      }
    );
  }




  /*
  ionViewDidLoad(){
    this.loginService.login()
      .subscribe(response => this.users = response);
  }
  */
  
  
  /*
  checkLogin(userInfo) {

    this.users.forEach(element => {

      if( (userInfo.email == element.email) && (userInfo.password != element.password) ){
        
        // If current user's email address matches, but password does not
        this.loginMessage = "Wrong password"

      } else if( (userInfo.email == element.email) && (userInfo.password == element.password) ) {
        
        // If current user's email and password matches
        this.loginMessage = "success";

      } else {

        // If cannot find email address
        this.loginMessage = "account not recognized"

      }
    
    });
  }
*/

}
