import { Component,EventEmitter, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the StartDateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'start-date',
  templateUrl: 'start-date.html'
})
export class StartDateComponent {
  @Output() goBack = new EventEmitter<any>();
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();
  startDate: string;
  targetDate: moment.Moment;

  constructor() {
    this.startDate = moment().day(2).toISOString();
    this.targetDate = moment().add(22,'days');
  }

  setTargetDate() {
    this.targetDate = moment(this.startDate).add(22,'days');
  }

  emitGoBack() {
    this.goBack.emit();
  }

  emitNextPage() {
    this.nextPage.emit();
  }

}
