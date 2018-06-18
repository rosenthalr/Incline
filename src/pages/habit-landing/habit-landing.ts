import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  ModalController,
  NavParams,
  ModalOptions
} from 'ionic-angular';
import {
  TestDashboardPage
} from '../test-dashboard/test-dashboard';
import {
  HabitGetService
} from '../../services/habitget.service';
import {
  HabitPutService
} from '../../services/habitput.service';
import {
  HabitDeleteService
} from '../../services/habitdelete.service';
import {
  HabitDetailsPage
} from '../habit-details/habit-details';
import {
  ModalCheckboxPage
} from '../modal-checkbox/modal-checkbox';
import {
  ResetStreakModalPage
} from '../reset-streak-modal/reset-streak-modal';
import {
  HabitCompletePage
} from '../habit-complete/habit-complete';
import {
  HabitRenewPage
} from '../habit-renew/habit-renew';
import {
  trigger,
  state,
  animate,
  transition,
} from '@angular/animations';
import {
  habitsEnter,
  showDetails,
} from './habit-landing.animations';
import * as moment from 'moment';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the HabitLandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habit-landing',
  templateUrl: 'habit-landing.html',
  providers: [
    HabitGetService,
    HabitPutService,
    HabitDeleteService,
  ],
  animations: [
    habitsEnter,
    showDetails
  ]
})

export class HabitLandingPage {
  expiredHabits: Array <object>;
  completedHabits: Array <object>;
  habits: Array < any > =[];
  testCheckboxOpen: boolean;
  testCheckboxResult: string;
  lateHabits: Array < any > ;
  resetHabits: Array < any > ;
  animating: boolean;
  showDetails: String = 'hidden';

  constructor(private habitGetService: HabitGetService,
    public habitDeleteService: HabitDeleteService,
    public habitPutService: HabitPutService,
    public navCtrl: NavController,
    private modal: ModalController,
    public navParams: NavParams,
    private platform: Platform, 
    private notifications: LocalNotifications
  ) {}

  createNewPage() {
    this.navCtrl.push(TestDashboardPage);
  }

  openModal() {
    const myModal = this.modal.create('ModalPage');
    myModal.present();
  }
  goToHabitDetails(habit) {
    const habitDetailsPage = this.modal.create(HabitDetailsPage, habit)
    habitDetailsPage.present();
  }

  loadHabits() {
    let today = moment()
    this.habitGetService.habitget().subscribe(
      (data) => {
        data.map((x,i) => {
          x.index = i;
          x.checked = x.updatedAt === new Date(new Date().setHours(0, 0, 0, 0)).toISOString();
        });
        this.habits = data;
        console.log(this.habits);
        this.lateHabits = this.habits.filter(habit => {
          var habitUpdatedAt = moment(habit.updatedAt).toISOString(true);
          var diff = today.diff(habitUpdatedAt, 'days');
          return diff === 2;
        });

        this.expiredHabits = this.habits.filter(habit => {
          return (today.diff(moment(habit.targetEnd),'days') === 0) && habit.streakCounter !== 21 
          && (today.isSame(moment(habit.updatedAt),'days'));
        });

        // If there are no late habits, then it is safe to show the 21 Day Progress Notice pop-up (if applicable)
        // If this is not the case, we'll wait until the other pop-ups are shown
        if(this.lateHabits.length === 0 && this.expiredHabits.length > 0) {
          this.showRenewHabitModal();
        }

        this.resetHabits = this.habits.filter(habit =>{
          return today.diff(habit.updatedAt,'days') > 2
        });

      },
      (error) => {
        console.error(error)
      },
      () => {
        this.openCheckboxModal(this.lateHabits);
      }
    )
  }

  showRenewHabitModal(habit: object = undefined):void {
    if(!habit) {
      let expiredHabit = this.expiredHabits.pop();
      let habitRenewModal = this.modal.create(HabitRenewPage, { expiredHabit });
      habitRenewModal.present();
      habitRenewModal.onDidDismiss((habit, action) => {
      // Instead of delete, will need to update to be archived 
      if(action === 'delete') {
        let deletedHabit = habit._id;

        // After a habit is deleted, remove it from the habits array
        this.habits = this.habits.filter((habit) => {
          return habit._id !== deletedHabit;
        });
      }
        if(this.expiredHabits.length > 0) {
            this.showRenewHabitModal();
        } 
      });
    } else {
      let expiredHabit = habit;
      let habitRenewModal = this.modal.create(HabitRenewPage, { expiredHabit });
      habitRenewModal.present();
      habitRenewModal.onDidDismiss((habit, action) => {
        // Instead of delete, will need to update to be archived 
        if(action === 'delete') {
          let deletedHabit = habit._id;
  
          // After a habit is deleted, remove it from the habits array
          this.habits = this.habits.filter((habit) => {
            return habit._id !== deletedHabit;
          });
        } else {
          habit.targetEnd = moment().add(21,'days').toISOString();
          this.habitPutService.habitput(habit).subscribe();
        }
      });
    }
  }

  showHabitCompleteModal(habit: object = undefined):void {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      showBackdrop: false
    };
    if(habit) {
      let habitCompleteModal = this.modal.create(HabitCompletePage, { habit }, myModalOptions);
        habitCompleteModal.present();
        habitCompleteModal.onDidDismiss((habit, action) => {
          // Instead of delete, will need to update to be archived 
          if(action === 'delete') {
            let deletedHabit = habit._id;

            // After a habit is deleted, remove it from the habits array
            this.habits = this.habits.filter((habit) => {
              return habit._id !== deletedHabit;
            });
          } else {
            habit.targetEnd = moment().add(21,'days').toISOString();
            this.habitPutService.habitput(habit).subscribe();
          }
      });
    } else {
      let habit = this.completedHabits.pop();
      let habitCompleteModal = this.modal.create(HabitCompletePage, { habit }, myModalOptions);
        habitCompleteModal.present();
        habitCompleteModal.onDidDismiss((habit, action) => {

          // Instead of delete, will need to update to be archived 
          if(action === 'delete') {
            let deletedHabit = habit._id;

            // After a habit is deleted, remove it from the habits array
            this.habits = this.habits.filter((habit) => {
              return habit._id !== deletedHabit;
            });
          } else {
            habit.targetEnd = moment().add(21,'days').toISOString();
            this.habitPutService.habitput(habit).subscribe();
          }
          if(this.completedHabits.length > 0) {
            this.showHabitCompleteModal();
          } else if (this.expiredHabits.length > 0) {
            this.showRenewHabitModal();
          }
      });
    } 
  }

  setHabitClass(habitCategory: string) {
    let classes = {
      'productivity': habitCategory === 'Productivity',
      'mental': habitCategory === 'Mental Wellness',
      'physical': habitCategory === 'Physical Health',
      'basic': habitCategory === 'The Basics'
    };
    return classes;
  }


  resetNotification(habit){
    let today = moment().startOf('day');

    this.platform.ready().then(() => {
    
    var newStartDate = moment(habit.startDate).toISOString();
    var reminder = habit.reminder;
    var reminderHour = moment(reminder).get('hour');
    var reminderMinute = moment(reminder).get('minute');
    var firstReminder = moment(newStartDate).set({'hour': reminderHour, 'minute': reminderMinute}).toDate();

    console.log(newStartDate + ": this is newStartDate");
    if (today.isSame(moment(habit.updatedAt), 'days'))
    {
      console.log("in today is same as updated");
      this.notifications.cancel(habit._id);

      let notification = {
        id: habit._id,
        title: 'New Alert ' + habit.title,
        text: 'This is a new alert ' + habit.title,
        firstAt: firstReminder,
        every: 'minute'
      };
      //make sure to add a day from today
      console.log(notification + ": notification");
      this.notifications.schedule(notification);

    }
  });
  }
  

  increment(habit) {
    let today = moment().startOf('day');
    if (habit.checked) {
      if (habit.streakCounter < 1) {
        return
      } else {
        habit.streakCounter -= 1;
        habit.updateCounter -= 1;
        habit.updatedAt = today.subtract(1, 'day').toDate();
        this.habitPutService.habitput(habit).subscribe(
          data => {
            habit.checked = false;
            habit.updatedAt = habit.updatedAt.toISOString();
          },
          error => {
            console.error(error);
          })
      }
    } else {
      habit.streakCounter += 1;
      habit.updateCounter += 1;
      habit.longestStreakCounter = habit.longestStreakCounter < habit.streakCounter ? habit.streakCounter : habit.longestStreakCounter;
      habit.updatedAt = today.toDate();

      if(habit.streakCounter === 21) {
        this.showHabitCompleteModal(habit);
      } else if(habit.streakCounter !== 21 
        && (today.isSame(moment(habit.updatedAt),'days'))
        && (today.isSame(moment(habit.targetEnd),'days'))) {
        this.showRenewHabitModal(habit);
      }

      this.habitPutService.habitput(habit).subscribe(
        data => {
          habit.checked = true;
          habit.updatedAt = habit.updatedAt.toISOString();
          // this.resetNotification(habit);
        },
        error => {
          console.error(error)
        });
    }
      
  }

  

  animationStarted(habit) {
    habit.animating = true;
  }
  animationEnded(habit) {
    habit.animating = false
  }
  
  setReminderTime(habit){
    this.habitPutService.habitput(habit).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.error(error);
      }
    )
  }

  deleteHabit(habit){
    var blah = habit.customId;

    this.habitDeleteService.habitdelete(habit).subscribe(
      data =>{
        habit.animating = false;
        this.animating = false;
        this.showDetails= 'hidden'
        this.habits.splice(habit.index,1);
        console.log(blah + " this is customID delete")
        this.notifications.clear(blah);
      },
      error =>{
        console.error(error);
      }
    )
    
  }
  animationTrigger(habit) {
    habit.animating = habit.animating ? false : true;
    this.animating = this.animating ? false : true;
    this.showDetails = this.showDetails==='shown' ? "hidden" : "shown";
  }


  openCheckboxModal(habits) {
    if (habits.length < 1) {
      this.openResetModal(this.resetHabits);
      return
    } else {
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        showBackdrop: false
      };
      const checkboxModal = this.modal.create(ModalCheckboxPage, {
        data: habits
      }, myModalOptions);
      checkboxModal.present();
      checkboxModal.onDidDismiss(() => {
        this.openResetModal(this.resetHabits);

        // If there was expired habits when we intially loaded the page, then make another call to 
        // the db to ensure that this is still the case b/c may have changed after user completed the other pop-ups
        if(this.expiredHabits.length > 0) {
          this.habitGetService.habitget().subscribe((habits) => {
            this.expiredHabits = habits.filter(habit => {
              return (moment().diff(moment(habit.targetEnd),'days') === 0) 
              && habit.streakCounter !== 21 
              && (moment(habit.updatedAt).diff(moment(),'days') === 0);
            });
            this.completedHabits = habits.filter(habit => {
              return habit.streakCounter === 21;
            });
            if (this.completedHabits.length > 0) {
              this.showHabitCompleteModal();
            } else {
              this.showRenewHabitModal();
            }
          });
        }
      });
    }
  }

  openResetModal(habits) {
    if (habits.length < 1) {
      return
    } else {
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        showBackdrop: false
      };
      const resetModal = this.modal.create(ResetStreakModalPage, {
        data: habits
      }, myModalOptions);
      resetModal.present();
      resetModal.onDidDismiss((data) => {});
    }
  }
  ionViewDidEnter() {
    this.loadHabits();
  }
}
