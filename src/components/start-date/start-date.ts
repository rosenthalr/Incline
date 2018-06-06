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
  habit;
  min: string;
  max: string;
  hasChanged: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.habit = this.navParams.get('habit');
   this.startDate= moment().add(1, 'days').startOf("day").toISOString(true);
   this.min= moment().add(1, 'days').startOf("day").toISOString(true);
   this.max= moment().add(1, 'year').startOf("day").toISOString(true);
   this.targetDate = moment().add(22, 'days').toISOString(true);
  //  this.reminder = moment().hours(this.navParams.get('reminder')).minutes(0).seconds(0).toISOString(true);
  }

  ngOnInit() {
    // this.min =  moment().add(1, 'days').toISOString(true);
    // this.max = moment().add(1, 'years').toISOString(true);
    // this.startDate = moment(this.startDate).add(1,"days").toISOString(true);
    // this.targetDate = moment(this.startDate).add(21,'days').toISOString(true);
  }

  // setTargetDate() {
  //   this.targetDate = moment(this.startDate).add(21,'days').toISOString(true);
  //   this.hasChanged = true;
  // }

  setTargetDate(startDate){
    this.targetDate = moment(startDate).add(22, 'days').startOf("day").toISOString(true);
    console.log(this.startDate + ": this is startdate");
    console.log(this.targetDate + ": this is targetdate");
    this.hasChanged = true;
  }

  emitGoBack() {
    this.goBack.emit();
  }

  emitNextPage() {
    this.nextPage.emit();
    localStorage.setItem("basicstartdate", this.startDate);
    console.log(this.startDate + ": this is startdate");
    localStorage.setItem("basictargetdate", this.targetDate);
    console.log(this.targetDate + ": this is targetdate");
    // console.log('startdate: '+  this.startDate + '    targetdate : '+ this.targetDate); //if I don't log the output, it doesn't save to local storage/post to the service for some reason

  }

  // localStorage.setItem("basichabit", this.habitName);
  // console.log(this.habitName);
}