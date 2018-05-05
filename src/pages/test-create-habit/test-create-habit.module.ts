import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestCreateHabitPage } from './test-create-habit';

@NgModule({
  declarations: [
    TestCreateHabitPage,
  ],
  imports: [
    IonicPageModule.forChild(TestCreateHabitPage),
  ],
})
export class TestCreateHabitPageModule {}
