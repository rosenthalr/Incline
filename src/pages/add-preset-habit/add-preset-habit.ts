import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

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
})
export class AddPresetHabitPage {
  private startDate: String;
  private minDateOfPicker: String;
  private maxDateOfPicker: String;
  private target: String;
  private reminder: String;
  habit

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.habit = this.navParams.get('habit');
   this.startDate= moment().add(1, 'days').startOf("day").toISOString(true);
   this.minDateOfPicker= moment().add(1, 'days').startOf("day").toISOString(true);
   this.maxDateOfPicker= moment().add(1, 'year').startOf("day").toISOString(true);
   this.target = moment().add(22, 'days').toISOString(true);
   this.reminder = moment().hours(8).minutes(0).seconds(0).toISOString(true);

  }

  setDate(startDate){
    this.target = moment(startDate).add(21, 'days').startOf("day").toISOString(true);
    var reminderMoment = moment(this.reminder as moment.MomentInput);
    this.reminder = moment(startDate).hours(reminderMoment.hours()).minutes(reminderMoment.minutes()).toISOString(true);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPresetHabitPage');
  }

}
