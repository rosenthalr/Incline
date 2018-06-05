import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { HabitLandingPage } from '../habit-landing/habit-landing';
import { HabitPostService } from '../../services/habitpost.service';
import { Habit } from './habit.interface'
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the AddPresetHabitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-preset-habit',
  templateUrl: 'add-preset-habit.html',
  providers: [HabitPostService]
})
export class AddPresetHabitPage {
  private startDate: Date|moment.Moment;
  private minDateOfPicker: String;
  private maxDateOfPicker: String;
  private target: String;
  habit;
  reminder;
  currentColor:string;
  habitCategory:string;


  constructor(private habitPostService: HabitPostService, public navCtrl: NavController, public navParams: NavParams) {
   this.habit = this.navParams.get('habit');
   this.startDate= moment().add(1, 'days').startOf("day");
   this.minDateOfPicker= moment().add(1, 'days').startOf("day").toISOString(true);
   this.maxDateOfPicker= moment().add(1, 'year').startOf("day").toISOString(true);
   this.target = moment().add(22, 'days').toISOString(true);
   this.reminder = moment().hours(this.navParams.get('reminder')).minutes(0).seconds(0).toISOString(true);
   this.habit = this.navParams.get('habit');
   this.currentColor = this.navParams.get('currentColor');
   this.habitCategory = this.navParams.get('habitCategory');

  }

  setDate(startDate){
    this.target = moment(startDate).add(21, 'days').startOf("day").toISOString(true);
    var reminderMoment = moment(this.reminder as moment.MomentInput);
    this.reminder = moment(startDate).hours(reminderMoment.hours()).minutes(reminderMoment.minutes()).toISOString(true);
  }

  goToHabitLandingPage(){
    const today = moment().startOf('day');
    let habit = {
      title: this.habit,
      startDate: today.toDate(),
      updatedAt: today.subtract(1,'day').toDate(),
      targeteEnd: this.target,
      reminder: this.reminder,
      streakCounter: 0,
      habitCategory: this.habitCategory,
      activehabit: true,
    };
console.log("here");
    this.habitPostService.habitpost(habit).subscribe(

      data => {
        this.navCtrl.pop();
        this.navCtrl.pop();
        this.navCtrl.parent.select(0);
         },
      error => {
        console.error(error);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPresetHabitPage');
    console.log(this.currentColor);
  }

}
