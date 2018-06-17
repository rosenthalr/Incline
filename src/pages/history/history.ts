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
  constructor(public habitGetService: HabitGetService, public navCtrl: NavController, public navParams: NavParams) {}

  loadHabits() {
    this.habitGetService.habitget().subscribe(
      (data)=>{
        this.habits = data.filter((habit:Habit)=>habit.activeHabit)
        this.present = data.length > 0 ? true : false;
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
