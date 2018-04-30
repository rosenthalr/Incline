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
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();
  categorySelected: boolean = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setCategory(categorySelected) { 
    this.categorySelected = categorySelected;
    this.onCategorySelected.emit(categorySelected);
    setTimeout(()=>{this.nextPage.emit()},100);
  }

  emitGoBack() {
    this.goBack.emit();
  }

}
