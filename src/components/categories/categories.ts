import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'categories',
  templateUrl: 'categories.html',
})
export class CategoriesComponent {

  @Output() onCategorySelected = new EventEmitter<string>();
  @Output() goBack = new EventEmitter<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  setCategory(category, evt) {
    console.log(evt);
    this.onCategorySelected.emit(category);
  }

  emitGoBack() {
    this.goBack.emit();
  }

}
