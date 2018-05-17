import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorePage } from './more';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EqualValidator } from '../create-account/equal-validator.directive';
import { MyApp } from '../../app/app.component';

@NgModule({
  declarations: [
    MorePage, MyApp, EqualValidator
  ],
  imports: [
    IonicPageModule.forChild(MorePage),
    BrowserModule,
    FormsModule,
    ],
    bootstrap: [
      MyApp
    ]
})
export class MorePageModule {}
