import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { checkedHabits } from '../../app/data/checkboxhabits';
import { TrackingReminderPage } from '../tracking-reminder/tracking-reminder';
/**
 * Generated class for the ModalCheckboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-checkbox',
  templateUrl: 'modal-checkbox.html',
})
export class ModalCheckboxPage {

habitBox: boolean;

checkedHabits: Array<any> = checkedHabits;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  updateHabitState(habit) {
    console.log('habit one new state:' + habit.habitBox);
  }


  closeModal(){
    const tracked = {
      selected: 'item'
    };

    this.view.dismiss(tracked);
  }

  ionViewDidLoad() {
   const data = this.navParams.get('data');
   console.log(data);
    console.log('ionViewDidLoad ModalCheckboxPage');
  }

  goToTrackingReminderPage() {
    this.navCtrl.push(TrackingReminderPage);
  }

}
