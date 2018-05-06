import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { mentalHabits } from '../../app/data/habits';
import { PhysicalHabitsPage } from '../physical-habits/physical-habits';
import { TabsPage } from '../tabs/tabs';
<<<<<<< HEAD
//test page below...delete this if you're in Develop branch and it's still here
import { TestCreateHabitPage } from '../test-create-habit/test-create-habit';
import { AddPresetHabitPage } from '../add-preset-habit/add-preset-habit';
=======
import { AddPresetHabitPage } from '../add-preset-habit/add-preset-habit';

>>>>>>> 348eb801fefa277ae06dd55347a171fc11509882
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MentalHabitsPage');
  }

  goToPhysicalHabitsPage(){
    // Temporarily changing navigation to the Habit Landing Page for testing purposes.
    // This should be replaced with CreateAccountPage after testing is complete
    this.navCtrl.push(PhysicalHabitsPage);

  }
  goToDiscover(){
    this.navCtrl.pop();
  }

  goToCreateHabit(mentalHabit){
    this.navCtrl.push(AddPresetHabitPage, {
      'habit': mentalHabit.habit,
      'reminder': mentalHabit.reminder,
      'currentColor': mentalHabit.currentColor
    });

  }

}
