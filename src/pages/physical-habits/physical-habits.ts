import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { physicalHabits } from '../../app/data/habits';
import { TabsPage } from '../tabs/tabs';
//test page below...delete this if you're in Develop branch and it's still here
import { TestCreateHabitPage } from '../test-create-habit/test-create-habit';
/**
 * Generated class for the PhysicalHabitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-physical-habits',
  templateUrl: 'physical-habits.html',
})
export class PhysicalHabitsPage {

  physicalHabits: Array<any> = physicalHabits;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysicalHabitsPage');
  }

  goToDiscover(){
    this.navCtrl.pop();
  }

  goToCreateHabit(physicalHabit){
    //testing to see if habit name logs on click
    console.log(physicalHabit.habit);
    this.navCtrl.push(TestCreateHabitPage, {
      'habit': physicalHabit.habit,
      'reminder': physicalHabit.reminder
    });

  }

}
