import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { HabitLandingPage } from '../habit-landing/habit-landing';
import { HabitPostService } from '../../services/habitpost.service';
import { Habit } from './habit.interface';

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
  providers: [HabitPostService]
})
export class AddPresetHabitPage {
  private startDate: String;
  private minDateOfPicker: String;
  private maxDateOfPicker: String;
  private target: String;
  habit
  reminder
  currentColor
  

  constructor(private habitPostService: HabitPostService, public navCtrl: NavController, public navParams: NavParams) {
   this.habit = this.navParams.get('habit');
   this.startDate= moment().add(1, 'days').startOf("day").toISOString(true);
   this.minDateOfPicker= moment().add(1, 'days').startOf("day").toISOString(true);
   this.maxDateOfPicker= moment().add(1, 'year').startOf("day").toISOString(true);
   this.target = moment().add(22, 'days').toISOString(true);
   this.reminder = moment().hours(this.navParams.get('reminder')).minutes(0).seconds(0).toISOString(true);
   this.habit = this.navParams.get('habit');
   this.currentColor = this.navParams.get('currentColor');
  }

  setDate(startDate){
    this.target = moment(startDate).add(21, 'days').startOf("day").toISOString(true);
    var reminderMoment = moment(this.reminder as moment.MomentInput);
    this.reminder = moment(startDate).hours(reminderMoment.hours()).minutes(reminderMoment.minutes()).toISOString(true);  
  }

  goToHabitLandingPage(){
    // let t = JSON.stringify(this.target);
    // let r = this.reminder; 
    // localStorage.setItem("reminder", r);          
    // localStorage.setItem("target", JSON.parse(t));
    // localStorage.setItem("habittitle", this.habit);
    // localStorage.setItem("currentColor", this.currentColor);   //habit category?
    
    // console.log(" reminder  :  " +this.reminder + "    type:   "+ this.reminder.type);
    // console.log("  target  :    "+this.target + "    JSON :   "+ localStorage.getItem('target') + "   string  :"+JSON.stringify(this.target));
    // console.log(" habit title:   "+this.habit);
    
    let habit = {
      title: this.habit,
      created: Date.now(),
      startdate: this.startDate,
      targetend: this.target,
      reminder: this.reminder,
      streakcounter: 1,    
      updatedAt: Date.now(),
    };
console.log("here");
    this.habitPostService.habitpost(habit).subscribe(
      
      data => {
        console.log(habit);
        this.navCtrl.push(HabitLandingPage);
         },
      error => {
        console.error(error);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPresetHabitPage');
    console.log(this.currentColor);
  }

}
