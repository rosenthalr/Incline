import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { HabitLandingPage } from '../habit-landing/habit-landing';
=======
import { TestPage } from '../test/test';
import { TabsPage } from '../tabs/tabs';
>>>>>>> a0e05a7ec31c2807f5fcf7015ada83d1ea5e34f5

@Component({
  selector: 'page-home',
  templateUrl: 'success.html'
})
export class SuccessPage {

  constructor(public navCtrl: NavController) {

  }
<<<<<<< HEAD
    goToHabitLandingPage(){
      this.navCtrl.push(HabitLandingPage);
=======
    goToTestPage(){
      this.navCtrl.push(TabsPage);

>>>>>>> a0e05a7ec31c2807f5fcf7015ada83d1ea5e34f5
  }

}
