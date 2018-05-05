import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { workHabits } from '../../app/data/habits';
import { TabsPage } from '../tabs/tabs';
//test page below...delete this if you're in Develop branch and it's still here
import { TestCreateHabitPage } from '../test-create-habit/test-create-habit';
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
    //testing to see if habit name logs on click
    console.log(workHabit.habit);
    this.navCtrl.push(TestCreateHabitPage, {
      'habit': workHabit.habit,
      'reminder': workHabit.reminder
    });

  }

}
