import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { basicHabits } from '../../app/data/habits';
import { TabsPage } from '../tabs/tabs';
//test page below...delete this if you're in Develop branch and it's still here
import { TestCreateHabitPage } from '../test-create-habit/test-create-habit';
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
})
export class BasicHabitsPage {

  basicHabits: Array<any> = basicHabits;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicHabitsPage');
  }

  goToDiscover(){
    this.navCtrl.pop();
  }

  goToCreateHabit(basicHabit){
    //testing to see if habit name logs on click
    console.log(basicHabit.habit);
    this.navCtrl.push(TestCreateHabitPage, {
      'habit': basicHabit.habit,
      'reminder': basicHabit.reminder
    });

  }

}
