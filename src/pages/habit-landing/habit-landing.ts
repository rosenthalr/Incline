import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { TestDashboardPage } from '../test-dashboard/test-dashboard';
import { HabitGetService } from '../../services/habitget.service';
import { HabitPutService } from '../../services/habitput.service';
import { HabitDetailsPage } from '../habit-details/habit-details';
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
  ionViewDidEnter() {
    console.log('ionViewDidLoad HabitLandingPage');
    this.loadHabits()
  }
}
