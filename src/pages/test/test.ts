import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage implements OnInit {
  @Input() category: string;
  cat: string;
  
  ngOnInit() {
    this.cat = this.category;
    console.log(this)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
