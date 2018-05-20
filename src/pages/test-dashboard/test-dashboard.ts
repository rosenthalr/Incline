import { Component, Renderer, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('circle1', {read: ElementRef}) circle1;
  current1 : number;
  current2 : number;
  current3 : number;
  current4 : number;
  max : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {
    this.current1 = 1;
    this.current2 = 5;
    this.current3 = 10;
    this.current4 = 20;
    this.max = 22;

  }
  incrementHabit1 (num: number){
    this.renderer.setElementStyle(this.circle1.nativeElement, 'fill', 'green !important');
    this.current1 += num;
  }

  incrementHabit2 (num: number){
    this.current2 += num;
  }

  incrementHabit3 (num: number){
    this.current3 += num;
  }

  incrementHabit4 (num: number){
    this.current4 += num;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestDashboardPage');
  }

}
