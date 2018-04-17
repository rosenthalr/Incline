import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyHabitsPage } from './my-habits';

@NgModule({
  declarations: [
    MyHabitsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyHabitsPage),
  ],
})
export class MyHabitsPageModule {}
