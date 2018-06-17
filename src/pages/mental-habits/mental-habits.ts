import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { mentalHabits } from '../../app/data/habits';
import { PhysicalHabitsPage } from '../physical-habits/physical-habits';
import { TabsPage } from '../tabs/tabs';
import { AddPresetHabitPage } from '../add-preset-habit/add-preset-habit';

/**
 * Generated class for the MentalHabitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mental-habits',
  templateUrl: 'mental-habits.html',
})
export class MentalHabitsPage {

  mentalHabits: Array<any> = mentalHabits;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MentalHabitsPage');
  }
  goToDiscover(){
    this.navCtrl.pop();
  }

  openModal(mentalHabit) {
    const myModal = this.modal.create('ModalPage', {
      'habit': mentalHabit.habit,
      'reminder': mentalHabit.reminder,
      'currentColor': mentalHabit.currentColor,
      'habitCategory':mentalHabit.habitCategory,
    });
    myModal.present();
  }

}
