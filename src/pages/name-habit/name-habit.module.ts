import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NameHabitPage } from './name-habit';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NameHabitPage,
    NameHabitComponent
  ],
  imports: [
    NameHabitComponent,
    IonicPageModule.forChild(NameHabitPage),
  ],
  exports:[
    NameHabitPage
  ]
})
export class NameHabitPageModule {
  
}
