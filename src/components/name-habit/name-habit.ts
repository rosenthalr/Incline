import { Component,EventEmitter, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
/**
 * Generated class for the NameHabitComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'name-habit',
  templateUrl: 'name-habit.html'
})
export class NameHabitComponent {
  @Output() onNamePicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();
  public habitName: string='';

  setName(name){
    this.onNamePicked.emit(name);
  }
  emitNextPage(){
    this.nextPage.emit()
    localStorage.setItem("basichabit", this.habitName);
    console.log(this.habitName);
  }
}
