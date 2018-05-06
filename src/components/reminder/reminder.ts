import { Component,EventEmitter, Output, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

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
  reminderTime: string;
  min: string;
  max: string;
  hasChanged: boolean = false;

  ngOnInit() {
    this.reminderTime = "08:00:00.000Z";
    
  }

  setReminderTime() {
    this.hasChanged = true;
  }

  emitGoBack() {
    this.goBack.emit();
  }

  emitNextPage() {
    this.nextPage.emit();
  }
}
