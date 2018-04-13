import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitLandingPage } from './habit-landing';

@NgModule({
  declarations: [
    HabitLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitLandingPage),
  ],
})
export class HabitLandingPageModule {}
