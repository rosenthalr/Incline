import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { TestDashboardPage } from '../test-dashboard/test-dashboard';
import { HabitGetService } from '../../services/habitget.service';

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
  providers:[HabitGetService]
})
export class HabitLandingPage {
  habits: Array<any>;
  showNotice:Boolean = true;
  constructor(private habitGetService: HabitGetService,public navCtrl: NavController, private modal: ModalController, public navParams: NavParams) {
  }

  createNewPage(){
    this.navCtrl.push(TestDashboardPage);
  }
  openModal() {
    const myModal = this.modal.create('ModalPage');

    myModal.present();
  }
  loadHabits(){
    this.habitGetService.habitget().subscribe(
      data=>{
        this.habits = data;
        console.log(data)
      },
      error =>{
        console.error(error)
      }
    )
  }
  ionViewDidEnter() {
    console.log('ionViewDidLoad HabitLandingPage');
    this.loadHabits()
  }

}
