import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
})

export class LoginPage {
  users: { email: string, password: string }[]
  loginMessage: string
 
  constructor(public http: Http, private loginService: LoginService) {
    this.loginMessage = " ";
  }

  ionViewDidLoad(){
    this.loginService.getUsers()
      .subscribe(response => this.users = response);
  }

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

}
