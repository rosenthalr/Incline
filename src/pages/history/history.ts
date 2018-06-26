import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer } from 'ionic-angular';
import { HabitGetService } from '../../services/habitget.service';
import { Habit } from '../../models/habit';
import { habitsEnter } from './history.animations'
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  providers: [HabitGetService],
  animations: [habitsEnter]
})
export class HistoryPage {
  habits: Habit[] =[];
  present: boolean = false;
  subtitle: String='Come back when you complete your first 21 day streak for a shiny trophy and an even shinier new daily habit!';
  title: String='No achievements yet.' ;
  constructor(public habitGetService: HabitGetService, public navCtrl: NavController, public navParams: NavParams) {}

  loadHabits() {
    this.habitGetService.habitget().subscribe(
      (data)=>{
<<<<<<< HEAD
        this.habits = data.filter((habit:Habit)=>!habit.activeHabit)
        this.present = this.habits.length > 0
        if(this.present){
          this.subtitle = 'Your hard work has made these daily activities easy.'
          this.title = 'You did it! ';
=======
        this.habits = data.filter((habit:Habit)=>habit.activeHabit)
        this.present = data.length > 0 ? true : false;
        if(this.habits.length>=1){
        this.subtitle = 'Your hard work has made these daily activities easy.'
        this.title = 'You did it! ';
>>>>>>> a5baf5e014f1fc0ede2fb73fa0d7e3a3d637e394
        }
      },(err)=>{
        console.error(err);
      }
    )
  }

  ionViewDidEnter() {
    this.loadHabits();
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad ArchivePage');
  }
}
