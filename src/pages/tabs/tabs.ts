import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

<<<<<<< HEAD
  myHabitsRoot = 'HabitLandingPage'
=======
  myHabitsRoot = 'MyHabitsPage';
>>>>>>> b2d67551be296b09b2a0aa4e25a975b5f7e467f3
  discoverRoot = 'DiscoverPage'
  historyRoot = 'HistoryPage'
  moreRoot = 'MorePage'


  constructor(public navCtrl: NavController) {}

}
