import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { checkedHabits } from '../../app/data/checkboxhabits';
import { TrackingReminderPage } from '../tracking-reminder/tracking-reminder';
import { HabitGetService } from '../../services/habitget.service';
import * as moment from 'moment';

/**
 * Generated class for the ResetStreakModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-streak-modal',
  templateUrl: 'reset-streak-modal.html',
})
export class ResetStreakModalPage {

  currentColor
  habits: Array<any>;
  public habitBox =false;
  now
  
  checkedHabits: Array<any> = checkedHabits;
  
    constructor(private habitGetService: HabitGetService, public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
      this.currentColor = this.navParams.get('currentColor');
      this.getUserHabits();
    }
  
  
    // changeState(habit){
    //   console.log("habit.habitBox below");
    //   console.log(habit.habitBox);
    // }
  
    getUserHabits(){
      this.habitGetService.habitget()
      .subscribe(
        data=>{
          this.habits = data;
          console.log("this.habits below");
          console.log(data)
        },
        error =>{
          console.error(error)
        }
      )
      console.log("this.habits below");
      console.log(this.habits)
    }
  
  

    updateHabitState(habit) {
      console.log(habit.habitBox);
    }
  
    closeModal(){
      const tracked = {
        selected: 'item'
      };
  
      this.view.dismiss(tracked);
    }
  
    ionViewDidLoad() {
     const data = this.navParams.get('data');
     console.log(checkedHabits);
    //  console.log(data);
      console.log('ionViewDidLoad ModalCheckboxPage');
     
    }
  
    goToTrackingReminderPage(habit) {
      // if (habit.habitBox = true)
      // this.navCtrl.push(TrackingReminderPage);
      // console.log(habit.habitbox);
      this.closeModal();
    }
  
  }
  