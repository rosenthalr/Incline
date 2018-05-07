import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ForgotService } from '../../services/forgot.service';
import { NavController } from 'ionic-angular';
import { ResetPage } from '../reset/reset';
import { CreateAccountPage } from '../create-account/create-account';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';


/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'forgot-page',
  templateUrl: 'forgot.html',
  providers: [ForgotService]
})
export class ForgotPage {

  public isComplete:boolean;
  public emailError:boolean;
  public email:string;
  
  public active: boolean;

  constructor(private forgotService:ForgotService, public navCtrl: NavController) {
  
    this.active = false;
    this.isComplete = false;
    this.emailError = false;
  }
  
  goToForgotPage(){
    this.navCtrl.push(ForgotPage);
  }
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  checkIfComplete(userInfo, field) {
    
        if (field='email') {
          this.email = userInfo;
        }
        if(this.email) {
           this.isComplete = true;
        }
         else {
           this.isComplete = false;
         }
      }

  forgot(userInfo) {
    //console.log(userInfo);

      let user = {
        email: userInfo.email,
      };

    this.forgotService.forgotUser(user).subscribe(
      data => {

        // log the success message to the console
        this.emailError = false;
        this.navCtrl.push(LoginPage); // return to login or refresh
        // Not sure why I need to return true, but it doesn't work when I remove it
        // return true;
      },
      error => {
       /*const errorMessage = error.error.info.message
        if(errorMessage == 'Wrong Email') {
          this.emailError = true;
        }*/
        return Observable.throw(error);
      }
    );
  }

}
