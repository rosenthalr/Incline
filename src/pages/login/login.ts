import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../../services/login.service';
import { NavController } from 'ionic-angular';

// HabitLandingPage is commented out b/c this branch hasn't been updated with that page yet
// import { HabitLandingPage } from '../habit-landing/habit-landing';
import { CreateAccountPage } from '../create-account/create-account';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
})

export class LoginPage {
  
  public active: boolean;
  public email: string;
  public password: string; 
  public isComplete: boolean;
  public emailError: boolean;
  public passwordError: boolean;

  public type='password';
  public showPass=false;


  constructor(private loginService: LoginService, public navCtrl: NavController) {
    this.active = false;
    this.isComplete = false;
    this.emailError = false;
    this.passwordError = false;
  }

  goToCreateAccountPage(){
    this.navCtrl.push(CreateAccountPage);

}

showPassword() {
  console.log("in showpassword");
  this.showPass = !this.showPass;

  if(this.showPass){
    this.type='text';
  } else {
    this.type='password';
  }
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
      
      // If a user has entered in valid login credentials, error messages will be removed and 
      // they'll be redirected to the Habit Landing Page
      data => {

        // Remove any error messages that may have appeared on previous login attempts
        this.emailError = false;
        this.passwordError = false;

        // Navigate to Habit Landing Page -- commented out below b/c this branch hasn't been updated with the habit landing page yet
        // this.navCtrl.push(HabitLandingPage);
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
