import { Component,EventEmitter, Output, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { HabitPostService } from '../../services/habitpost.service';


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

  constructor(private habitPostService: HabitPostService){}

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
    console.log(this.reminderTime);
    console.log(moment(this.reminderTime, "HH:mm:ss.SSSZ").toDate());
    let habit = {
      title: localStorage.getItem("basichabit"),
      created: Date.now(),
      startdate: localStorage.getItem("basicstartdate"),
      targetend: localStorage.getItem("basictargetdate"),
      reminder: moment(this.reminderTime, "HH:mm:ss.SSSZ").toDate(),
      streakcounter: 1,    
      updatedAt: Date.now(),
    };

    this.habitPostService.habitpost(habit).subscribe(
      data => {
        console.log(habit);
        this.goToHabitLandingPage.emit();
         },
      error => {
        console.error(error);
      })
    
  }
}
