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
  habits: Array < any > ;
  testCheckboxOpen: boolean;
  testCheckboxResult: string;
  lateHabits: Array < any > ;



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
    return this.habitGetService.habitget().subscribe(
      data => {
        data.map(x => {
          x.checked = x.updatedAt === new Date(new Date().setHours(0,0,0,0)).toISOString();
        });
        this.habits = data;
        console.log(this.habits);

        this.lateHabits = this.habits.filter(habit => {
          var today = moment();
          var habitUpdatedAt = moment(habit.updatedAt).toISOString(true);
          var diff = today.diff(habitUpdatedAt, 'days');
          console.log(diff);
          return diff > 1;
        })
        console.log("Late Habits: ");
        console.log(this.lateHabits);
      },
      error => {
        console.error(error)
      },
      () => {
        console.log("Loaded Habits");
        this.openCheckboxModal(this.lateHabits);
      }
    )
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
            console.log(habit.updatedAt)
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
      this.habitPutService.habitput(habit).subscribe(
        data => {
          console.log(data);
          habit.checked = true;
          habit.updatedAt = habit.updatedAt.toISOString();
        },
        error => {
          console.error(error)
        })
    }
  }
  animationStarted(habit) {
    habit.animating = true;
  }
  animationEnded(habit) {
    habit.animating = false
  }

  openCheckboxModal(habits) {
    if(habits.length<1){
      return
    }else{
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        showBackdrop: false
      };
      const checkboxModal = this.modal.create(ModalCheckboxPage, {
        data: habits
      }, myModalOptions);
      checkboxModal.present();
      checkboxModal.onDidDismiss(() => {
        console.log("I have dismissed");
      });
    }
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
  ionViewDidEnter() {
    this.loadHabits();
    console.log('ionViewDidLoad HabitLandingPage');
  }
}
