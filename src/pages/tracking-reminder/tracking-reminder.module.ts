import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackingReminderPage } from './tracking-reminder';

@NgModule({
  declarations: [
    TrackingReminderPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackingReminderPage),
  ],
})
export class TrackingReminderPageModule {}
