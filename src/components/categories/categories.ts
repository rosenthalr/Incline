import { Component, EventEmitter, Output } from '@angular/core';
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
  categorySelected: boolean = false;

  setCategory(categorySelected) {
    this.categorySelected = categorySelected;
    localStorage.setItem("habitCategory",categorySelected);
    setTimeout(()=>{
      this.onCategorySelected.emit(categorySelected);
      this.nextPage.emit();
    },140);
  }

  emitGoBack() {
    this.goBack.emit();
  }

}
