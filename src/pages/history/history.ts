import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer } from 'ionic-angular';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})

export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  current: number = 1;
  max: number = 21;
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }
  openFab($event,fab:FabContainer){
    fab.toggleList();
    console.log(fab._events);
    console.log(fab._listsActive);
  }

  closeFab($event,fab:FabContainer){
    fab.close();
    console.log(fab._listsActive);
  }
}
