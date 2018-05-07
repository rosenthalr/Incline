import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPage } from './reset';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EqualValidator } from '../create-account/equal-validator.directive';
import { MyApp } from '../../app/app.component';

@NgModule({
  declarations: [
    ResetPage
  ],
  imports: [
    IonicPageModule.forChild(ResetPage),
  ],
  entryComponents: [
     
  ],
  exports: [
    ResetPage
  ],
  bootstrap:      [  ]
})
export class ResetPageModule {}
