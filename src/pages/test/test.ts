import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
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
export class TestPage implements OnInit, OnChanges {
  @Input() category: string;
  cat: string;
  
  ngOnInit() {
    this.cat = this.category;
  }

  ngOnChanges(changes: SimpleChanges) {
    const category: SimpleChange = changes.category;
    this.cat = category.currentValue;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
