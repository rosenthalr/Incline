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
import * as moment from 'moment';
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
  ],
  animations: [
    trigger('checked', [
      transition('0 => 1', animate('5000ms ease-in')),
    ])
  ]
})

export class HabitLandingPage {
  habits: Array <any> ;
  testCheckboxOpen: boolean;
  testCheckboxResult: string;
  lateHabits: Array <any> ;
  resetHabits: Array <any>;
  expiredHabits: Array <object>;
  completedHabits: Array <object>;

  constructor(private habitGetService: HabitGetService,
    public habitPutService: HabitPutService,
    public navCtrl: NavController,
    private modal: ModalController,
    public navParams: NavParams
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
    let today = moment();
     this.habitGetService.habitget().subscribe(
      (data) => {
        data.map(x => {
          x.checked = x.updatedAt === new Date(new Date().setHours(0,0,0,0)).toISOString();
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

  increment(habit) {
    let today = moment().startOf('day');
    if (habit.checked) {
      if (habit.streakCounter < 1) {
        return
      } else {
        habit.streakCounter -= 1;
        habit.updatedAt = today.subtract(1,'day').toDate();

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

  openCheckboxModal(habits) {
    if(habits.length >= 1){
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
    if(habits.length < 1) {
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
