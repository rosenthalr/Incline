import { Component,EventEmitter, Output, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { HabitPostService } from '../../services/habitpost.service';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';
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
  reminderTime: string;
  min: string;
  max: string;
  hasChanged: boolean = false;

  constructor(private habitPostService: HabitPostService, private platform: Platform, private notifications: LocalNotifications){}

  ngOnInit() {
    this.reminderTime = "08:00:00.000Z";

  }

  setReminderTime() {
    this.hasChanged = true;
  }

  emitGoBack() {
    this.goBack.emit();
  }

  emitGoToHabitLandingPage() {

    let habit = {
      title: localStorage.getItem("basichabit"),
      reminder: moment(this.reminderTime, "HH:mm:ss.SSSZ").toDate(),
      streakCounter: 0,
      habitCategory: localStorage.getItem('habitCategory'),
      activehabit: true,
    };
        
    this.habitPostService.habitpost(habit).subscribe(
      data => {

        // Create notification here
        this.platform.ready().then(() => {
          console.log(data);

          var now = new Date().getTime();

          let notification = {
            id: data._id,
            title: 'Alert for ' + data.title,
            text: 'This is an alert for ' + data.title,
            firstAt: now,
            every: 'minute'
          };
          this.notifications.schedule(notification);
          
        });
      
        this.goToHabitLandingPage.emit();
      },
      error => {
        console.error(error);
      })

  }
}
