import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ForgotService } from '../../services/forgot.service';
import { NavController } from 'ionic-angular';
import { ResetPage } from '../reset/reset';
import { CreateAccountPage } from '../create-account/create-account';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';

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

  constructor(private toastCtrl: ToastController, private forgotService:ForgotService, public navCtrl: NavController) {
  
    this.active = false;
    this.isComplete = false;
    this.emailError = false;
  }
  
  goToForgotPage(){
    this.navCtrl.push(ForgotPage);
  }
  goToLogin(){
    this.navCtrl.pop();
  }
  checkIfEmailEmpty(){
    if(this.email == ''){
      this.emailError = false;
    }
  }
  checkIfComplete(userInfo, field) {
    
        if(field=='email') {
          this.email = userInfo;
        }
    
        if(this.email) {
           this.active = true;
           this.isComplete = true;
         } else {
           this.active = false;
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
        console.log(this.emailError);
        let toast = this.toastCtrl.create({
          message: 'Your password reset is in your email inbox.',
          duration: 8000,
          position: 'top',
          cssClass: 'toast-forgot'
        });
        toast.present();
        // this.navCtrl.push(LoginPage); // return to login or refresh

      },
      error => {
        console.log("error thrown: " + this.emailError);
        this.emailError=true;
        // const errorMessage = error.error.info.message;
        
        //         if(errorMessage == 'Email not valid') {
        //           this.emailError = true;
        //           //Needed to add this below to make sure that both errors don't appear at the same time.
        //         } else {
        //           this.emailError = false;
        //         }   
        // console.log(error);
        return Observable.throw(error);
      }
    );
  }

}
