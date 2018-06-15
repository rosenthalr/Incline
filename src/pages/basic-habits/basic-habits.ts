import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { basicHabits } from '../../app/data/habits';
import { TabsPage } from '../tabs/tabs';
import { AddPresetHabitPage } from '../add-preset-habit/add-preset-habit';
import { HabitPostService } from '../../services/habitpost.service';
/**
 * Generated class for the BasicHabitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basic-habits',
  templateUrl: 'basic-habits.html',
  providers: [HabitPostService],
})
export class BasicHabitsPage {

  basicHabits: Array<any> = basicHabits;

  constructor(private habitPostService: HabitPostService, public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicHabitsPage');
  }

  goToDiscover(){
    this.navCtrl.pop();
  }

  openModal(basicHabit) {
    const myModal = this.modal.create('ModalPage', {
      'habit': basicHabit.habit,
      'reminder': basicHabit.reminder,
      'currentColor': basicHabit.currentColor,
      'habitCategory':basicHabit.habitCategory
    });
    myModal.present();
  }


}
