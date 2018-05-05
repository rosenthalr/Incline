import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { WorkHabitsPage } from '../work-habits/work-habits';
import { MentalHabitsPage } from '../mental-habits/mental-habits';
import { PhysicalHabitsPage } from '../physical-habits/physical-habits';
import { BasicHabitsPage } from '../basic-habits/basic-habits';

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

  constructor(public navCtrl: NavController, private modal: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoverPage');
  }
  goToPhysicalHealth(){
    this.navCtrl.push(PhysicalHabitsPage);
  }
  goToMentalWellness(){
    this.navCtrl.push(MentalHabitsPage);
  }
  goToBasics(){
    this.navCtrl.push(BasicHabitsPage);
  }
  goToProductivity(){
    this.navCtrl.push(WorkHabitsPage);
  }

  openModal() {
    const myModal = this.modal.create('ModalPage');

    myModal.present();
  }

}
