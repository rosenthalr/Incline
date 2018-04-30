import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import { ComponentsModule } from '../../components/components.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    HistoryPage,
    ComponentsModule
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
    ComponentsModule
  ],
})
export class HistoryPageModule {}
