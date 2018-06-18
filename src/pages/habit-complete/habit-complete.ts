import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HabitDeleteService } from '../../services/habitdelete.service';
import {Habit} from '../../models/habit';
import * as moment from 'moment';
/*
 * Generated class for the HabitCompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habit-complete',
  templateUrl: 'habit-complete.html',
})
export class HabitCompletePage {
  habit: Habit;

  constructor(public viewCtrl: ViewController, private deleteHabitService: HabitDeleteService) {
    this.habit = this.viewCtrl.data.habit;
  }

  keepTracking(habit) {
    this.habit.targetEnd = moment().add(21,'days').toISOString();
    this.viewCtrl.dismiss(this.habit, 'keep');
  }

  deleteHabit(habit) {
    this.habit.activeHabit = false;
    this.viewCtrl.dismiss(this.habit, 'delete');
  }

}
