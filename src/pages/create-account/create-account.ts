import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { User } from './user.interface';
import { SuccessPage } from '../success/success';
import { CreateAccountService } from '../../services/create-account.service'
//import { CreateAccountService } from '../../services/create-account.service';
import {Observable} from 'rxjs/Observable';



/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
  providers:[CreateAccountService],
})
export class CreateAccountPage implements OnInit {

  public type='password';
  public type2='password';
  public showPass=false;
  public showPass2=false;
  public isComplete:boolean;
  public emailError:boolean;
  public passwordLengthError:boolean;
  public passwordMatchError:boolean;
  public firstName:string;
  public lastName:string;
  public email:string;
  public password1:string;
  public password2:string;
  public user: User;


  constructor(public createAccountService:CreateAccountService,public navCtrl: NavController, public navParams: NavParams) {
  }

    ngOnInit() {
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
    //constructor(public navCtrl: NavController, public navParams: NavParams, private CreateAccountService: CreateAccountService) {


    save(model: User, isValid: boolean) {
      // call API to save customer
      this.createAccountService.createaccount(model).subscribe(
        data => {
          console.log(model);
        },
        error => {
          console.error(error);
        }
      )
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

  goToLogin(){
    this.navCtrl.pop();
  }

  goToSuccessPage(){
    this.navCtrl.push(SuccessPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  checkIfComplete(userInfo, field) {

        if (field='firstName') {
          this.firstName = userInfo;
        }
        else if (field='lastName'){
          this.lastName = userInfo;
        }
        else if (field='email') {
          this.email = userInfo;
        }
        else if (field='password1') {
          this.password1 = userInfo;
        }
        else if (field='password2') {
          this.password2 = userInfo;
        }
            if(this.firstName && this.lastName && this.email && this.password1 && this.password2) {
              this.isComplete = true;
            }
         else {
           this.isComplete = false;
         }
      }

}
