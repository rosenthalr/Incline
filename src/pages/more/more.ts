import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { User } from '../create-account/user.interface';
import { SuccessPage } from '../success/success';
import { LoginPage } from '../login/login';
import { LogoutService} from '../../services/logout.service';
import { MoreResetService } from '../../services/morereset.service';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['LoginPage'],
})
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage implements OnInit {
  
  public type='password';
  public type2='password';
  public type3='password';
  public showPass=false;
  public showPass2=false;
  public showPass3=false;
  public isComplete: boolean;
  public emailError: boolean;
  public passwordLengthError:boolean;
  public passwordMatchError:boolean;
  public password:string;
  public password2:string;
  public password3:string;
  public active: boolean;
  public passwordError: boolean;
  public user: any;

  constructor(public moreResetService: MoreResetService, public actionSheetCtrl: ActionSheetController, private logoutService: LogoutService, public navCtrl: NavController, public navParams: NavParams) {
    this.active = false;
    this.isComplete = false;
    this.emailError = false;
    this.passwordError = false;
  }
  ngOnInit() {
    this.user = {
      password: '',
      password2: '',
      password3:'',
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
  showPassword() {
    this.showPass = !this.showPass;

    if(this.showPass){
      this.type='text';
    } else {
      this.type='password';
    }
  }

  showPassword2() {
    this.showPass2=!this.showPass2;

    if(this.showPass2){
      this.type2='text';
    } else {
      this.type2='password';
    }
  }
  showPassword3() {
    this.showPass3=!this.showPass3;

    if(this.showPass3){
      this.type3='text';
    } else {
      this.type3='password';
    }
  }

  checkIfPasswordEmpty(){
    if(this.password !== ''){
      this.passwordError = false;
    }
  }
  goToSuccessPage(){
    this.navCtrl.push(SuccessPage);
  }

  checkIfComplete(userInfo, field) {
    
        if(field='password') {
          this.user.password = userInfo;
          }
          else if (field='password2') {
            this.user.password2 = userInfo;
          }
          else if (field='password3') {
            this.user.password3 = userInfo;
          }
          if(this.user.password && this.user.password2 && this.user.password3) {
            this.isComplete = true;
         }
        else {
          this.isComplete=false;
        }
      }
  
      logout(user){
        let actionSheet = this.actionSheetCtrl.create({
          title: 'Are you sure you want to log out?',
          cssClass: 'action-sheets-logout',
          buttons: [
            {
              text: 'Log Out',
              cssClass: 'LogoutButton',
              handler: () => {
                this.logoutService.logout(user).subscribe(
                  data => {          
                    console.log('Logged Out');
                    this.navCtrl.parent.parent.setRoot(LoginPage);
                    this.navCtrl.popToRoot();
                  },
                  error => {
                    const errorMessage = error.error.info.message;
                    console.log(errorMessage);
                  })
                }
              },
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'LogoutCancelButton',
              handler: () => {
                // this is where cancel code goes
                console.log('Cancelled');
              }
            }
          ]
        });
        actionSheet.present();
      }

      reset(userInfo) {
        let user = {
          password: userInfo.password,
          password2: userInfo.password2,
          password3: userInfo.password3
        };
        console.log(user);
        this.moreResetService.resetUser(user).subscribe(
          data => {
            console.log(user);
          },
          error => {
            console.error(error);
          }
        )
      }
}
