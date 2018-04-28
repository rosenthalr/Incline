import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { mentalHabits } from '../../app/data/habits';
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

}
