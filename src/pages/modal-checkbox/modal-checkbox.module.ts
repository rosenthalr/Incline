import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCheckboxPage } from './modal-checkbox';

@NgModule({
  declarations: [
    ModalCheckboxPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCheckboxPage),
  ],
})
export class ModalCheckboxPageModule {}
