import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'success.html'
})
export class SuccessPage {
  // testPage = TestPage;

  constructor(public navCtrl: NavController) {

  }
    goToTestPage(){
      this.navCtrl.push(TabsPage);

  }

}
