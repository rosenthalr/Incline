import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { workHabits } from '../../app/data/habits';
import { TabsPage } from '../tabs/tabs';
import { AddPresetHabitPage } from '../add-preset-habit/add-preset-habit';
/**
 * Generated class for the WorkHabitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-habits',
  templateUrl: 'work-habits.html',
})
export class WorkHabitsPage {

  workHabits: Array<any> = workHabits;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkHabitsPage');
  }

  goToDiscover(){
    this.navCtrl.pop();
  }

  goToCreateHabit(workHabit){
    this.navCtrl.push(AddPresetHabitPage, {
      'habit': workHabit.habit,
      'reminder': workHabit.reminder,
      'currentColor': workHabit.currentColor,
      'habitCategory': workHabit.habitCategory
    });

  }

}
