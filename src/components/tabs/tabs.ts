import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

 
  myHabitsRoot = 'MyHabitsPage'
  discoverRoot = 'DiscoverPage'
  historyRoot = 'HistoryPage'
  moreRoot = 'MorePage'


  constructor(public navCtrl: NavController) {}

}


