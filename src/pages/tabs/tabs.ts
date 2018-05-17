import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {HabitLandingPage} from '../habit-landing/habit-landing';
import {DiscoverPage} from '../discover/discover';
import {HistoryPage} from '../history/history';
import {MorePage} from '../more/more';
import { MentalHabitsPage } from '../mental-habits/mental-habits';
import { HabitGetService } from '../../services/habitget.service';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  providers: [HabitGetService]
})
export class TabsPage {

  myHabitsRoot = HabitLandingPage
  discoverRoot = DiscoverPage
  historyRoot = HistoryPage
  moreRoot = MorePage
  mentalHabitRoot = MentalHabitsPage


  constructor(private habitGetService: HabitGetService, public navCtrl: NavController) {}

  getUserHabits() {
    
        this.habitGetService.habitget()
        .subscribe((data: Response) => {
            console.log(data);
          },
          error => {
            console.error(error);
          }
        )
      }
}
