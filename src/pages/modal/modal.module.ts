import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import { CategoriesPageModule } from '../categories/categories.module';

@NgModule({
  declarations: [
    ModalPage
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
    CategoriesPageModule
  ],
})
export class ModalPageModule {}
