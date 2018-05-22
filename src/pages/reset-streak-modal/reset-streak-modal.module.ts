import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetStreakModalPage } from './reset-streak-modal';

@NgModule({
  declarations: [
    ResetStreakModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetStreakModalPage),
  ],
})
export class ResetStreakModalPageModule {}
