import { Component,EventEmitter, Output, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { HabitPostService } from '../../services/habitpost.service';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';
import { stagger } from '@angular/animations/src/animation_metadata';
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

  constructor(private habitPostService: HabitPostService, private platform: Platform, private notifications: LocalNotifications){}

  ngOnInit() {
    this.reminderTime = "08:00:00.000Z";

  }

  setReminderTime() {
    this.hasChanged = true;
    this.formattedReminder = moment(this.reminderTime, "HH:mm:ss.SSSZ");
    this.reminderTime = moment().hours(this.formattedReminder.hours()).minutes(this.formattedReminder.minutes()).toISOString(true);
    console.log(this.reminderTime);
    this.onReminderPicked.emit(this.reminderTime);
  }

  emitGoBack() {
    this.goBack.emit();
  }

  emitGoToHabitLandingPage() {
    this.goToHabitLandingPage.emit();
  }
}
