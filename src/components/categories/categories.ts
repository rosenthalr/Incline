import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    console.log(categorySelected);
    this.categorySelected = categorySelected;
    setTimeout(()=>{
      this.onCategorySelected.emit(categorySelected);
      this.nextPage.emit();
    },140);
    // console.log(categorySelected);
    // localStorage.setItem("category", this.category);
    //   console.log(this.category);
  }

 

  ngOnInit() {
   
  }

  emitGoBack() {
    this.goBack.emit();
  }

}
