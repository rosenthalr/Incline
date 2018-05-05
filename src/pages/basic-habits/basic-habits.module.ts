import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicHabitsPage } from './basic-habits';

@NgModule({
  declarations: [
    BasicHabitsPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicHabitsPage),
  ],
})
export class BasicHabitsPageModule {}
