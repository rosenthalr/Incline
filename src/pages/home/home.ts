import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { LoginPage } from '../login/login';
=======
import { CreateAccountPage } from '../create-account/create-account';
>>>>>>> feature/create-account

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

<<<<<<< HEAD
=======
  }

  goToCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }

>>>>>>> feature/create-account
}