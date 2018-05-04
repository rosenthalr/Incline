import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestCreateHabitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-create-habit',
  templateUrl: 'test-create-habit.html',
})
export class TestCreateHabitPage {
habit
reminder
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.habit = this.navParams.get('habit');
    this.reminder = this.navParams.get('reminder');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestCreateHabitPage');
  }

}
