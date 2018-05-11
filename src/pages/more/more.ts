import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { User } from '../create-account/user.interface';
import { More } from './morereset.interface';
import { SuccessPage } from '../success/success';
import { LoginPage } from '../login/login';
import { LogoutService } from '../../services/logout.service';
import { MoreResetService } from '../../services/morereset.service';
import { ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { Form } from 'ionic-angular/util/form';
import { Toast } from 'ionic-angular/components/toast/toast';

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
  providers: [MoreResetService]
})
export class MorePage implements OnInit {

  public type = 'password';
  public type2 = 'password';
  public type3 = 'password';
  public showPass = false;
  public showPass2 = false;
  public showPass3 = false;
  public isComplete: boolean;
  public passwordLengthError: boolean;
  public passwordMatchError: boolean;
  public password: string;
  public password2: string;
  public password3: string;
  public passwordError: boolean;
  public confirmError: boolean;
  public sameError: boolean;
  public confirmComplete: boolean;
  public more: More;
  public active: boolean;
  public f: FormGroup;


  constructor(private toastCtrl: ToastController, private moreResetService: MoreResetService, private actionSheetCtrl: ActionSheetController,
    private logoutService: LogoutService, private navCtrl: NavController, private navParams: NavParams) {
    this.isComplete = false;
    this.passwordError = false;
    this.active = false;
    this.confirmError = false;
    this.sameError = false;
    this.confirmComplete = false;
  }
  ngOnInit() {
    this.more = {
      password: '',
      password2: '',
      password3: '',
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
    console.log('pw   ' + localStorage.getItem("pw") + localStorage.getItem("pw").length)
    console.log('passwordError   ' + this.passwordError)
  }
  showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  showPassword2() {
    this.showPass2 = !this.showPass2;

    if (this.showPass2) {
      this.type2 = 'text';
    } else {
      this.type2 = 'password';
    }
  }
  showPassword3() {
    this.showPass3 = !this.showPass3;

    if (this.showPass3) {
      this.type3 = 'text';
    } else {
      this.type3 = 'password';
    }
  }

  checkIfPasswordEmpty() {
    if (this.password == '') {
      this.passwordError = false;
    }
  }
  goToSuccessPage() {
    this.navCtrl.push(SuccessPage);
  }

  checkIfComplete(userInfo, field) {

    if (field == 'password') {
      this.password = userInfo;
      this.isComplete = true;
    } else if (field == 'password2') {
      this.password2 = userInfo;
    }
    else if (field == 'password3') {
      this.password3 = userInfo;
      this.confirmComplete = true;
    }
  }

  checkIfSame(userInfo, field) {
    if (this.password2 !== localStorage.getItem("pw")) {
      this.sameError = false;
    } else {
      this.sameError = true;
      this.active = false;
    }
  }

  checkIfConfirm(userInfo, field) {
    if (this.confirmComplete = true) {
      if (this.password3.length > this.password2.length - 1) {
        console.log(this.active);
        if(this.password2 !== localStorage.getItem("pw")) {
        if (this.password2 !== this.password3 ) {
          this.confirmError = true;
          this.active = false;
        } else {
          this.confirmError = false;
          this.active = true;
        }
      }
    }
  }
  }
  checkIfCorrect(userInfo, field) {
    if (this.isComplete = true) {
      if (this.password.length > localStorage.getItem("pw").length - 1) {
        // console.log('isComplete:   ' + this.isComplete)
        // console.log('passwordError:    ' + this.passwordError + '     pw ----- '+ this.password + '  l  '+ this.password.length)
        if (this.password !== localStorage.getItem("pw")) {
          this.passwordError = true;
          if (field == 'password') {
            this.password = userInfo;
          }
        } else {
          this.passwordError = false;
          this.active = false;
        }
      }
    }
  }



  logout(user) {
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
                localStorage.clear();
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

  reset(userInfo: More) {
    let user = {
      password: userInfo.password,
      password2: userInfo.password2,
      password3: userInfo.password3
    };
    this.moreResetService.resetuser(user).subscribe(
      data => {
        let toast = this.toastCtrl.create({
          message: 'Your password has been updated!',
          duration: 4000,
          position: 'top',
          cssClass: 'toast-reset'
        });
        toast.present();
        this.navCtrl.push(MorePage);
      },
      error => {
        console.error(error);
      }
    )
  }
}
