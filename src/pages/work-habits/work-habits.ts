import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { workHabits } from '../../app/data/habits';
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

}
