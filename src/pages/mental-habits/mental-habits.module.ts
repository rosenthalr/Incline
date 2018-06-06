import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MentalHabitsPage } from './mental-habits';
import { ComponentsModule } from '../../components/components.module'
import { TabsPageModule} from '../tabs/tabs.module'
import { TabsPage } from '../tabs/tabs';

@NgModule({
  declarations: [
    MentalHabitsPage,
    TabsPage
  ],
  imports: [
    IonicPageModule.forChild(MentalHabitsPage),
    ComponentsModule,
    TabsPageModule
  ],
})
export class MentalHabitsPageModule {}
