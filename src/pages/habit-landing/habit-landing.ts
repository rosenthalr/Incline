import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ModalOptions } from 'ionic-angular';
import { TestDashboardPage } from '../test-dashboard/test-dashboard';
import { HabitGetService } from '../../services/habitget.service';
import { HabitPutService } from '../../services/habitput.service';
import { HabitDetailsPage } from '../habit-details/habit-details';
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
  providers:[HabitGetService,HabitPutService
    ]
})

export class HabitLandingPage {
  habits: Array<any>;
  testCheckboxOpen: boolean;
  testCheckboxResult: string;
  lateHabits : Array<any>;

  

  constructor(private habitGetService: HabitGetService,
    public habitPutService:HabitPutService,
    public navCtrl: NavController,
    private modal: ModalController,
    public navParams: NavParams
    ){
  }

  createNewPage(){
    this.navCtrl.push(TestDashboardPage);
  }

  openModal() {
    const myModal = this.modal.create('ModalPage');
    myModal.present();
  }
  goToHabitDetails(habit){
    const habitDetailsPage = this.modal.create(HabitDetailsPage,habit)
    habitDetailsPage.present();
  }

  loadHabits(){
    this.habitGetService.habitget().subscribe(
      data=>{
        data.map(x=>{
          x.checked = x.updatedAt === new Date(new Date().setHours(0,0,0,0)).toISOString();
          console.log(x.updatedAt);
        })
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
  
  increment(habit){
    if(habit.checked){
      return
    }else{
      habit.streakCounter += 1;
      this.habitPutService.habitput(habit).subscribe(
      data=>{
        console.log(data);
        habit.checked = true
      },
      error =>{
        console.error(error)
      })
    }
  }

  openCheckboxModal() {
    
        console.log("in open");
        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false,
          showBackdrop: false
        };
    
        const myData = {
          habit: 'habit',
          category: 'color'
        };
    
        const checkboxModal = this.modal.create('ModalCheckboxPage', { data: myData}, myModalOptions);
    
        checkboxModal.present();
    
        checkboxModal.onDidDismiss((data) => {
          console.log("I have dismissed");
          console.log(data);
        });
    
        checkboxModal.onWillDismiss((data) => {
          console.log("I'm about to dismiss");
          console.log(data);
        });
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
            this.lateHabits=data.filter(habit=>{
              habit.forgotCheckin = habit.updatedAt;
              console.log(habit.forgotCheckin);
    
              var a = moment();
              console.log('a then b');
              console.log(a);
              var b = moment(habit.updatedAt).toISOString(true);
              console.log(b);
              var diff = a.diff(b, 'days');
              console.log(diff);
    
              return diff === 1;
          
              })
              console.log(this.lateHabits);
         
            },
            error =>{
              console.error(error)
            }
          )
       }
    

  ionViewDidEnter() {
    console.log('ionViewDidLoad HabitLandingPage');
    this.loadHabits();
    
    console.log(this.lateHabits);
    console.log('lateHabits above');
    console.log(length);
    // this.checkDate();
    this.openCheckboxModal();
    
  //   if(this.lateHabits.length > 0){
  //     console.log("more than 0");
  //     this.openCheckboxModal();
  //   }
  //   else {
  //     console.log('error with length');
  //   }
    
  // }
}
}
