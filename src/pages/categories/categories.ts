import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { TestPage } from '../test/test';
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
  @Input() category: string;
  @Output() onCategorySelected = new EventEmitter<string>();


  ngOnInit() {
    this.category = '';
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  setCategory(category) {
    this.onCategorySelected.emit(category);
  }

  goBack() {

  }

}
