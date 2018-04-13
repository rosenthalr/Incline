import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage implements OnInit {
  public category: string;

  ngOnInit() {
    this.category = null;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showCat(){
    console.log(this.category);
  }

}
