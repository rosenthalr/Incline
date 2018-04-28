import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MentalHabitsPage } from './mental-habits';

@NgModule({
  declarations: [
    MentalHabitsPage,
  ],
  imports: [
    IonicPageModule.forChild(MentalHabitsPage),
  ],
})
export class MentalHabitsPageModule {}
