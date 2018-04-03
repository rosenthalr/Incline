import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }

}