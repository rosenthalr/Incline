import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitCompletePage } from './habit-complete';

@NgModule({
  declarations: [
    HabitCompletePage,
  ],
  imports: [
    IonicPageModule.forChild(HabitCompletePage),
  ],
})
export class HabitCompletePageModule {}
