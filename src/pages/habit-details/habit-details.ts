import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the HabitDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habit-details',
  templateUrl: 'habit-details.html',
})
export class HabitDetailsPage {
  title:string;
  constructor(private viewCtrl:ViewController ,public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title')
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitDetailsPage');
  }

}
