import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
export class CategoriesPage {

  @Output() onCategorySelected = new EventEmitter<string>();
  @Output() goBack = new EventEmitter<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  setCategory(category) {
    this.onCategorySelected.emit(category);
  }

  emitGoBack() {
    this.goBack.emit();
  }

}
