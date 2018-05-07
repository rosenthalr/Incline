import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhysicalHabitsPage } from './physical-habits';

@NgModule({
  declarations: [
    PhysicalHabitsPage,
  ],
  imports: [
    IonicPageModule.forChild(PhysicalHabitsPage),
  ],
})
export class PhysicalHabitsPageModule {}
