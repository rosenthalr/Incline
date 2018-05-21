import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { checkedHabits } from '../../app/data/checkboxhabits';
import { TrackingReminderPage } from '../tracking-reminder/tracking-reminder';
import { HabitGetService } from '../../services/habitget.service';
import * as moment from 'moment';

/**
 * Generated class for the ModalCheckboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-checkbox',
  templateUrl: 'modal-checkbox.html',
  providers: [HabitGetService]
})
export class ModalCheckboxPage {
currentColor
habitBox: boolean;
habits: Array<any>;
now

checkedHabits: Array<any> = checkedHabits;

  constructor(private habitGetService: HabitGetService, public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.currentColor = this.navParams.get('currentColor');
    this.getUserHabits();
  }

  // checkUserHabits(){
  //   const now = moment();
  //   console.log(now);
  //   const updatedAt = this.habits.title;
  // }

  getUserHabits(){
    this.habitGetService.habitget()
    .subscribe(
      data=>{
        this.habits = data;
        console.log(data)
      },
      error =>{
        console.error(error)
      }
    )
  }


  setHabitClass(habitCategory:string){
    let classes = {
      'productivity': habitCategory==='Productivity',
      'mental': habitCategory==='Mental Wellness',
      'physical': habitCategory==='Physical Health',
      'basic': habitCategory==='The Basics'
    };
    return classes;
  }

  updateHabitState(habit) {
    console.log('habit one new state:' + habit.habitBox);
    console.log(habit.currentColor);
  }

  checkDate(){
    let Arr: Array<any>;
    let Arr2: Array<any>;
    let updatedDay: number;
    let updatedMonth: number;
    let updatedYear: number;
    let todaysDay: any;
    
    
      this.habitGetService.habitget().subscribe(
        data=>{
          Arr=data.filter(habit=>{
            habit.forgotCheckin = habit.updatedAt;
            console.log(habit.forgotCheckin);

            var a = moment();
            console.log('a then b');
            console.log(a);
            var b = moment(habit.updatedAt).toISOString(true);
            console.log(b);
            var diff = a.diff(b, 'days');
            console.log(diff);

            return diff>=0;

          //  Arr = habit.forgotCheckin.split(/T/);
          //  Arr2 = Arr[0].split(/-/);
          //  updatedYear = Arr2[0]
          //  updatedMonth = Arr2[1];
          //  updatedDay = Arr2[2];
          //  console.log('day');
          //  console.log(updatedDay);
          //  todaysDay = moment().date();
          //  console.log('now');
          //  console.log(todaysDay);
      
          })
          console.log(Arr);
          // this.habits = data;
          // // console.log(data)
          // let date1 = date1.setHours(0,0,0,0);
          // let value = date1-date2;
          // return Math.round(value/(1000*3600*2)
        },
        error =>{
          console.error(error)
        }
      )
   }
  //  === new Date(new Date().setHours(0,0,0,0)).toISOString()


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
    console.log('checkDate');
this.checkDate();
  }

  goToTrackingReminderPage() {
    this.navCtrl.push(TrackingReminderPage);
  }

}
