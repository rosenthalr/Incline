import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-dashboard',
  templateUrl: 'test-dashboard.html',
})
export class TestDashboardPage {
  current : number;
  max : number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.current = 20;
    this.max = 22;

  }
  increment(num: number){
    this.current += num;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestDashboardPage');
  }

}
