import { Component,EventEmitter, Output, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { HabitPostService } from '../../services/habitpost.service';
import { Platform } from 'ionic-angular';
import { stagger } from '@angular/animations/src/animation_metadata';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the ReminderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reminder',
  templateUrl: 'reminder.html'
})
export class ReminderComponent implements OnInit {
  @Output() goBack = new EventEmitter<any>();
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() goToHabitLandingPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReminderPicked: EventEmitter<any> = new EventEmitter<any>();

  reminderTime: string;
  min: string;
  max: string;
  hasChanged: boolean = false;
  formattedReminder: moment.Moment;

  constructor(private habitPostService: HabitPostService, private platform: Platform, public localNotifications: LocalNotifications){}

  ngOnInit() {
    this.reminderTime = "08:00:00.000Z";

  }

  setReminderTime() {
    this.hasChanged = true;
    this.formattedReminder = moment.utc(this.reminderTime, "HH:mm:ss.SSSZ");
    console.log(this.formattedReminder);
    this.onReminderPicked.emit(this.formattedReminder);
  }

  emitGoBack() {
    this.goBack.emit();
  }

  emitGoToHabitLandingPage() {
    let today = moment().startOf('day');
    let yesturday = today.subtract(1,'day');
    let habit = {
      updatedAt: today.toDate(),
      title: localStorage.getItem("basichabit"),
      startDate: localStorage.getItem("basicstartdate"),
      targetEnd: localStorage.getItem("basictargetdate"),  
      reminder: moment(this.reminderTime, "HH:mm:ss.SSSZ").toDate(),
      streakCounter: 0,
      habitCategory: localStorage.getItem('habitCategory'),
      activehabit: true,
    };
        
    this.habitPostService.habitpost(habit).subscribe(
      data => {
        console.log("before post service");
        var startDate = data.startDate;
        var reminder = data.reminder;
        var reminderHour = moment(reminder).get('hour');
        var reminderMinute = moment(reminder).get('minute');
        var now = moment();
        var firstReminder = moment(startDate).set({'hour': reminderHour, 'minute': reminderMinute}).toDate();
        
    
          let notification = {
            id: data.customId,
            title: data.title,
            text: 'Local notification text',
            at: firstReminder,
            every: 'day'
          };


          // let notification = {
          //   // id: data.customId,
          //   title: data.title,
          //   text: 'Did you do your habit yet today? If so, open Incline to add it to your streak!',
          //   // firstAt: firstReminder,
          //   every: 'day'
          // };


          console.log("notification to be scheduled: ");
          if(this.platform.is('cordova')){
            this.localNotifications.schedule(notification);           
          }
        
      
        this.goToHabitLandingPage.emit();
      },
      error => {
        console.error(error);
      })
      console.log("outside of post service");
  }
}
