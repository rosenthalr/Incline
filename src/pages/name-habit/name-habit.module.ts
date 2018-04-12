import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NameHabitPage } from './name-habit';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NameHabitPage,
    ComponentsModule,
  ],
  imports: [
    IonicPageModule.forChild(NameHabitPage),
  ],
  exports:[
    NameHabitPage
  ],
  entryComponents:[
    ComponentsModule
  ]
})
export class NameHabitPageModule {
  
}
