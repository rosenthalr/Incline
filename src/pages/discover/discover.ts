import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoverPage');
  }
  goToPhysicalHealth(){
    this.navCtrl.push(PhysicalHealthPage);
  }
  goToMentalWellness(){
    this.navCtrl.push(MentalWellnesPage);
  }
  goToBasics(){
    this.navCtrl.push(BackToBasicsPage);
  }
  goToProductivity(){
    this.navCtrl.push(ProductivityPage);
  }

}
