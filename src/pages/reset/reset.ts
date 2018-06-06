import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ResetService } from '../../services/reset.service';
import { NavController } from 'ionic-angular';
import { User } from '../create-account/user.interface';
import { CreateAccountPage } from '../create-account/create-account';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IonicPage, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SuccessPage } from '../success/success';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'reset/:token'
})
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
  providers: [ResetService]
})

export class ResetPage implements OnInit {
  public passwordError: boolean;
  public isComplete:boolean;
  public emailError:boolean;
  public email:string;
  public type='password';
  public type2='password';
  public showPass=false;
  public showPass2=false;
  public passwordLengthError:boolean;
  public passwordMatchError:boolean;
  public active: boolean;
  public password1:string;
  public password2:string;
  public user: any;
  
  ngOnInit() {
    
    this.user = {
      password: '',
      comfirmPassword: '',
      resetPasswordToken: '',
    }
  }


constructor(private resetService:ResetService, public navCtrl: NavController, private paramToken: NavParams) {
  
    this.active = false;
    this.isComplete = false;
    this.emailError = false;
    
  }
  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type='text';
    } else {
      this.type='password';
    }
  }
  
  reset(model: User, isValid: boolean) {
    this.user.resetPasswordToken=this.paramToken.get('token');
    this.resetService.resetUser(model);
    console.log(model, isValid);
    this.navCtrl.push(SuccessPage);
  }
 
  showPassword2() {
    this.showPass2=!this.showPass2;

    if(this.showPass2){
      this.type2='text';
    } else {
      this.type2='password';
    }
  }
  goToSuccessPage(){
    this.navCtrl.push(SuccessPage);
  }
 
ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');

  }

goToResetPage(){
    this.navCtrl.push(ResetPage);
  }
goToLogin(){
    this.navCtrl.push(LoginPage);
  }

checkIfComplete(userInfo, field) {
    
        if (field='password1') {
          this.password1 = userInfo;
        } else {
            this.password2 = userInfo;
        }
        
        if(this.password1 && this.password2) {
          this.active = true;
          this.isComplete = true;
        } else {
          this.active = false;
          this.isComplete = false;
      }
    }
  }
