import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { checkedHabits } from '../../app/data/checkboxhabits';
import { TrackingReminderPage } from '../tracking-reminder/tracking-reminder';
import { HabitGetService } from '../../services/habitget.service';

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
  providers: [HabitGetService]
})
export class ModalCheckboxPage {
currentColor
habitBox: boolean;
habits: Array<any>;

checkedHabits: Array<any> = checkedHabits;

  constructor(private habitGetService: HabitGetService, public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.currentColor = this.navParams.get('currentColor');
  }


    getUserHabits(){
      this.habitGetService.habitget()
      .subscribe(
        data=>{
          this.habits = data;
          console.log(data)
        },
        error =>{
          console.error(error)
        }
      )
    }

  updateHabitState(habit) {
    console.log('habit one new state:' + habit.habitBox);
    console.log(habit.currentColor);
  }


  closeModal(){
    const tracked = {
      selected: 'item'
    };

    this.view.dismiss(tracked);
  }

  ionViewDidLoad() {
   const data = this.navParams.get('data');
   console.log(checkedHabits);
  //  console.log(data);
    console.log('ionViewDidLoad ModalCheckboxPage');
  }

  goToTrackingReminderPage() {
    this.navCtrl.push(TrackingReminderPage);
  }

}
