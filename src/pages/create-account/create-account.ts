import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { HomePage } from '../home/home';
import { User } from './user.interface';
import { SuccessPage } from '../success/success';
//UNCOMMENT TO MAKE CODE WORK -Reuven



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
})
export class CreateAccountPage implements OnInit {

  public type = 'password';
  public type2 = 'password';
  public showPass = false;
  public showPass2 = false;
  public isComplete: boolean;
  public emailError: boolean;
  public passwordLengthError: boolean;
  public passwordMatchError: boolean;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password1: string;
  public password2: string;
  //public user : FormGroup;

  public user: User;
  
    ngOnInit() {
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  
    save(model: User, isValid: boolean) {
      // call API to save customer
      console.log(model, isValid);
    }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*
    this.user = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      //password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      //confirmPassword: new FormControl('', [Validators.required, this.matchingPasswords("password", "confirmPassword")])
      });
      */
  }


  showPassword() {
    this.showPass = !this.showPass;

    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  showPassword2() {
    this.showPass2 = !this.showPass2;

    if(this.showPass2){
      this.type2 = 'text';
    } else {
      this.type2 = 'password';
    }
  }
  /*
  matchingPasswords(password1: string, password2: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[password1];
      let confirmPassword = group.controls[password2];
  
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }
  */

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
    
        if (field= 'firstName') {
          this.firstName = userInfo;
        }
        else if (field= 'lastName'){
          this.lastName = userInfo;
        }
        else if (field= 'email') {
          this.email = userInfo;
        }
        else if (field= 'password1') {
          this.password1 = userInfo;
        }
        else if (field= 'password2') {
          this.password2 = userInfo;
        }
    
        if(this.firstName && this.lastName && this.email && this.password1 && this.password2) {
           this.isComplete = true;
        }
         else {
           this.isComplete = false;
         }
      }

      /*
      DB Connection 

      CreateAccount(userInfo) {
        console.log(userInfo);
    
          let user = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            username: userInfo.email,
            password: userInfo.password
          };
    
        this.CreateAccountService.createaccount(user).subscribe(
          data => {
    
            // log the success message to the console
            console.log(data);
            this.emailError = false;
    
            //this.navCtrl.push(SuccessPage);
            // Not sure why I need to return true, but it doesn't work when I remove it
            //return true;
          },
          error => {
            this.emailError = true;
            console.error("");
            return Observable.throw(error);
          }
        );
      }

*/
}
