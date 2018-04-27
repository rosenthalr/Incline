import { Component } from '@angular/core';

/**
 * Generated class for the ReminderTimeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reminder-time',
  templateUrl: 'reminder-time.html'
})
export class ReminderTimeComponent {

  text: string;

  constructor() {
    console.log('Hello ReminderTimeComponent Component');
    this.text = 'Hello World';
  }

}
