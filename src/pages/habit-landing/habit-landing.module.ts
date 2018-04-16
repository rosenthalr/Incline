import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitLandingPage } from './habit-landing';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    HabitLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitLandingPage),
    ComponentsModule
  ],
})
export class HabitLandingPageModule {}
