import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { HabitLandingPage } from '../habit-landing/habit-landing';
import { HabitPostService } from '../../services/habitpost.service';
import { Habit } from './habit.interface'
import { TabsPage } from '../tabs/tabs';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';

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
  target: string;
  habit;
  reminder;
  currentColor:string;
  habitCategory:string;


  constructor(private habitPostService: HabitPostService, public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private notifications: LocalNotifications) {
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

  setDate(startDate, target){
    this.target = moment(startDate).add(22, 'days').startOf("day").toISOString(true);
    var reminderMoment = moment(this.reminder as moment.MomentInput);
    this.reminder = moment(startDate).hours(reminderMoment.hours()).minutes(reminderMoment.minutes()).toISOString(true);
    localStorage.setItem("targetdate", this.target);
  }


goToHabitLandingPage(){
  let habit = {
    title: this.habit,
    startDate: this.startDate,
    targetEnd: localStorage.getItem("targetdate"),
    reminder: this.reminder,
    streakCounter: 0,
    habitCategory: this.habitCategory,
    activehabit: true,
    updatedAt: moment().startOf('day').subtract(1,'day'),
  };

  this.habitPostService.habitpost(habit).subscribe(
    data => {
      this.navCtrl.pop();
      this.navCtrl.pop();
      this.navCtrl.parent.select(0);

      //Set notification below

      var startDate = data.startDate;
      var reminder = data.reminder;
      var reminderHour = moment(reminder).get('hour');
      var reminderMinute = moment(reminder).get('minute');
      var now = moment();


    this.platform.ready().then(() => {

      var firstReminder = moment(startDate).set({'hour': reminderHour, 'minute': reminderMinute}).toDate();
      console.log(startDate + ": this is startDate");
      console.log(firstReminder + ": this is firstReminder");

      let notification = {
        // id: data._id,
        title: 'Alert for ' + data.title,
        text: 'This is an alert for ' + data.title,
        firstAt: now,
        every: 'minute'
      };
      console.log(notification + ": notification");
      this.notifications.schedule(notification);

      //Setting the 21 days notification

      let reminderNotification = {
        id: data._id,
        title: '21 day alert for ' + data.title,
        text: 'This is your 21st day tracking this habit: ' + data.title,
        firstAt: data.targetEnd,
      };
      this.notifications.schedule(reminderNotification);

      });

    }
  )
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPresetHabitPage');
    console.log(this.currentColor);
  }

}

