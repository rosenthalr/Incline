import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPresetHabitPage } from './add-preset-habit';

@NgModule({
  declarations: [
    AddPresetHabitPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPresetHabitPage),
  ],
})
export class AddPresetHabitPageModule {}
