import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HabitGetService } from '../../services/habitget.service';
import * as moment from 'moment';
import { HabitPutService } from '../../services/habitput.service';

/**
 * Generated class for the ResetStreakModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-streak-modal',
  templateUrl: 'reset-streak-modal.html',
  providers: [HabitGetService,HabitPutService]
})
export class ResetStreakModalPage {


  habits: Array<any>;

    constructor(private habitPutService:HabitPutService, private habitGetService: HabitGetService, public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
      this.habits = this.navParams.get('data');
    }

    closeModal(){
      this.updateHabits(this.habits);
      this.view.dismiss();
    }

    ionViewDidLoad() {
     const data = this.navParams.get('data');
    //  console.log(data);
      console.log('ionViewDidLoad ModalCheckboxPage');
    }
    updateHabits(habits){
      let today = moment().startOf('day')
      habits.map(habit=>{
          habit.streakCounter = 0 ;
          habit.updatedAt = today.subtract(1,'days').toDate();
          habit.targetEnd = today.add(21,'days').toDate();
          this.habitPutService.habitput(habit).subscribe(
            data => {
              console.log(data);
              habit.checked = false
              habit.updatedAt = habit.updatedAt.toISOString();
              habit.targetEnd = habit.targetEnd.toISOString();
            },
            error => {
              console.error(error)
            }
          )
      })
    }
  }
