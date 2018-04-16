import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitLandingPage } from './habit-landing';
import { ComponentsModule } from '../../components/components.module'
import { TabsPageModule} from '../tabs/tabs.module'
import { TabsPage } from '../tabs/tabs';
@NgModule({
  declarations: [
    HabitLandingPage,
    TabsPage
  ],
  imports: [
    IonicPageModule.forChild(HabitLandingPage),
    ComponentsModule,
    TabsPageModule
  ],
})
export class HabitLandingPageModule {}
