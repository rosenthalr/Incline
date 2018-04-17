import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HabitLandingPage } from '../habit-landing/habit-landing';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'success.html'
})
export class SuccessPage {

  constructor(public navCtrl: NavController) {

  }
    goToHabitLandingPage(){
      this.navCtrl.push(TabsPage);
  }

}
