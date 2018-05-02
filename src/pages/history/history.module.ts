import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import { ComponentsModule } from '../../components/components.module';
import { TabsPageModule } from '../tabs/tabs.module';

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
    ComponentsModule,
    TabsPageModule
  ],
  entryComponents: [

  ]
})

export class HistoryPageModule {

}
