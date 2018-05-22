import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ModalOptions } from 'ionic-angular';
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
habits: Array<any>;
public habitBox =false;
now
Arr: Array<any>;

checkedHabits: Array<any> = checkedHabits;

  constructor(private habitGetService: HabitGetService, public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modal: ModalController) {
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



  // if (habit.habitbox == true){
  //   increment habit streak, updatedAt
  // }
  // else{
  //   set streak to zero, updatedAt
  // }

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
    console.log(habit.habitBox);
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

            return diff >= 0;

     
      
          })
          console.log(Arr + "this is the array");
         
        },
        error =>{
          console.error(error)
        }
      )
   }

   openResetModal() {
    
        console.log("in open");
        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false,
          showBackdrop: false
        };
    
        const myData = {
          habit: 'habit',
          category: 'color'
        };
    
        const resetModal = this.modal.create('ResetStreakModalPage', { data: myData}, myModalOptions);
    
        resetModal.present();
    
        resetModal.onDidDismiss((data) => {
          console.log("I have dismissed");
          console.log(data);
        });
    
        resetModal.onWillDismiss((data) => {
          console.log("I'm about to dismiss");
          console.log(data);
        });
      }


  closeModal(){
    const tracked = {
      selected: 'item'
    };

    this.view.dismiss(tracked);
    this.openResetModal();
  }

  ionViewDidLoad() {
   const data = this.navParams.get('data');
   console.log(checkedHabits);
  //  console.log(data);
    console.log('ionViewDidLoad ModalCheckboxPage');
    console.log('checkDate');
    this.checkDate();
  }

  goToTrackingReminderPage(habit) {
    // if (habit.habitBox = true)
    // this.navCtrl.push(TrackingReminderPage);
    // console.log(habit.habitbox);
    this.closeModal();
  }

}
