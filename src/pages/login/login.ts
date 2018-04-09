import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../../services/login.service';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { CreateAccountPage } from '../create-account/create-account';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  providers: [LoginService]
})

export class LoginPage {
  
  public active: boolean;
  public email: string;
  public password: string;
  public isComplete: boolean;
  public emailError: boolean;
  public passwordError: boolean;


  constructor(private loginService: LoginService, public navCtrl: NavController) {
    this.active = false;
    this.isComplete = false;
    this.emailError = false;
    this.passwordError = false;
  }

  goToCreateAccountPage(){
    this.navCtrl.push(CreateAccountPage);

}

  checkIfComplete(userInfo, field) {

    if(field=='email') {
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
    console.log(userInfo);

      let user = {
        email: userInfo.email,
        password: userInfo.password
      };

    this.loginService.login(user).subscribe(
      data => {

        // log the success message to the console
        this.emailError = false;
        this.passwordError = false;
        this.navCtrl.push(TestPage);
        // Not sure why I need to return true, but it doesn't work when I remove it
        //return true;
      },
      error => {
       const errorMessage = error.error.info.message
        if(errorMessage == 'Wrong Email') {
          this.emailError = true;
        } else {
          this.passwordError = true;
          this.emailError = false;
        }

        return Observable.throw(error);
      }
    );
  }

}
