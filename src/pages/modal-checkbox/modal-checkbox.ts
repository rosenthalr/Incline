import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ModalOptions } from 'ionic-angular';
import { checkedHabits } from '../../app/data/checkboxhabits';
import { TrackingReminderPage } from '../tracking-reminder/tracking-reminder';
import { HabitGetService } from '../../services/habitget.service';
import { HabitPutService } from '../../services/habitput.service';
import * as moment from 'moment';

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
  providers: [HabitGetService,HabitPutService]
})
export class ModalCheckboxPage {
  habits: Array<any>;
  public habitBox =false;

  constructor(private habitPutService:HabitPutService, private habitGetService: HabitGetService, public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modal: ModalController) {
    this.habits = navParams.get('data');
  }
  setHabitClass(habitCategory:string){
    let classes = {
      'productivity': habitCategory==='Productivity',
      'mental': habitCategory==='Mental Wellness',
      'physical': habitCategory==='Physical Health',
      'basic': habitCategory==='The Basics'
    };
    return classes;
  }
  updateCheckedHabits(habits){
    let today = moment().startOf('day')
    habits.map(habit=>{
      if(habit.habitBox){
        habit.streakCounter += 1;
        habit.updatedAt = today.subtract(1,'days').toDate();
        this.habitPutService.habitput(habit).subscribe(
          data => {
            console.log(data);
            habit.updatedAt = habit.updatedAt.toISOString();
          },
          error => {
            console.error(error)
          })
      }else{
        habit.streakCounter = 0 ;

        habit.updatedAt = today.toDate();
        habit.targetEnd = today.add(21,'days').toDate();
        this.habitPutService.habitput(habit).subscribe(
          data => {
            console.log(data);
            habit.checked = true
            habit.updatedAt = habit.updatedAt.toISOString();
            habit.targetEnd = habit.targetEnd.toISOString();
          },
          error => {
            console.error(error)
          })
      }
    })
  }
  updateHabitState(habit) {
    console.log(habit.habitBox);
  }
  closeModal(){
    this.view.dismiss();
  }
  ionViewDidLoad() {
   const data = this.navParams.get('data');
   console.log(data);
  }

  goToTrackingReminderPage(habits) {
    this.updateCheckedHabits(habits);
    this.closeModal();
  }

}
