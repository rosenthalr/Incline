import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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
export class StartDateComponent implements OnInit {
  @Output() goBack = new EventEmitter<any>();
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();
  startDate: string;
  targetDate: string;
  min: string;
  max: string;
  hasChanged: boolean = false;

  ngOnInit() {
    this.min =  moment().add(1, 'days').toISOString();
    this.max = moment().add(5, 'years').toISOString();
    this.startDate = moment().add(1,"days").toISOString();
    this.targetDate = moment(this.startDate).add(21,'days').toISOString();
  }

  setTargetDate() {
    this.targetDate = moment(this.startDate).add(21,'days').toISOString();
    this.hasChanged = true;
  }

  emitGoBack() {
    this.goBack.emit();
  }

  emitNextPage() {
    this.nextPage.emit();
  }

}
