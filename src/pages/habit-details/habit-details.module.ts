import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitDetailsPage } from './habit-details';

@NgModule({
  declarations: [
    HabitDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitDetailsPage),
  ],
})
export class HabitDetailsPageModule {}
