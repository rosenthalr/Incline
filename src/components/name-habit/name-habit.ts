import { Component, ViewChild} from '@angular/core';
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

  public nameHabit: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.nameHabit = this.formBuilder.group({
      name: ['',Validators.required]
    }) ;
  }
  
}
