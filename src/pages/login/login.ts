import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../../services/login.service';
import { NavController } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';
import { TabsPage } from '../tabs/tabs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
})

export class LoginPage {
  
  public active: boolean;
  public email: string = '';
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

//Unhide and hide password
showPassword() {
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


// removes the error class when field is deleted so that the error message doesn't hang
// Not sure why, but when I tried to combine into one function I received an errorHandler. 
// I think it had to do with placing the same ngModelChange in two elements
checkIfEmailEmpty(){
  if(this.email !== ''){
    this.emailError = false;
  }
}

checkIfPasswordEmpty(){
  if(this.password !== ''){
    this.passwordError = false;
  }
}




  login(userInfo) {
      let user = {
        email: userInfo.email,
        password: userInfo.password
      };

      // Test successful login without connection to DB
      if(this.email.toUpperCase()==='TEST' && this.password.toUpperCase()==='TEST'){
        this.navCtrl.push(TabsPage);
      }

      this.loginService.login(user).subscribe(
      
        // If a user has entered in valid login credentials, error messages will be removed and 
        // they'll be redirected to the Habit Landing Page
        data => {
  
          // Remove any error messages that may have appeared on previous login attempts
          this.emailError = false;
          this.passwordError = false;
  
          // Remove header image


          // Navigate to Habit Landing Page
          this.navCtrl.push(TabsPage);
       },
        error => {
        const errorMessage = error.error.info.message

        if(errorMessage == 'Wrong Email') {
          this.emailError = true;
          //Needed to add this below to make sure that both errors don't appear at the same time.
          this.passwordError = false;
        } else {
          this.passwordError = true;
          this.emailError = false;
        }

        return Observable.throw(error);
      }
    );
  }

}