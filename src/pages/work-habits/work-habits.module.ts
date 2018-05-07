import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkHabitsPage } from './work-habits';

@NgModule({
  declarations: [
    WorkHabitsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkHabitsPage),
  ],
})
export class WorkHabitsPageModule {}
