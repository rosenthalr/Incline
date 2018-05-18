import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { TestDashboardPage } from '../test-dashboard/test-dashboard';

/**
 * Generated class for the HabitLandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habit-landing',
  templateUrl: 'habit-landing.html',
})
export class HabitLandingPage {
  habits: Array<any>;
  constructor(public navCtrl: NavController, private modal: ModalController, public navParams: NavParams) {
  }

  createNewPage(){
    this.navCtrl.push(TestDashboardPage);
  }
  openModal() {
    const myModal = this.modal.create('ModalPage');

    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitLandingPage');

  }

}
