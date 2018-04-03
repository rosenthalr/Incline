import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'success.html'
})
export class SuccessPage {

  constructor(public navCtrl: NavController) {

  }
    goToTestPage(){
      this.navCtrl.push(TestPage);
  }

}
