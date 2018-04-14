import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import { CategoriesPageModule } from '../categories/categories.module';
import { TestPageModule } from '../test/test.module';

@NgModule({
  declarations: [
    ModalPage
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
    CategoriesPageModule,
    TestPageModule
  ],
})
export class ModalPageModule {}
