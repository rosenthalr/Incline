import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestDashboardPage } from './test-dashboard';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TestDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(TestDashboardPage),
    ComponentsModule
  ],
})
export class TestDashboardPageModule {}
