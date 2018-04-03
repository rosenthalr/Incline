/*
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAccountPage } from './create-account';

@NgModule({
  declarations: [
    CreateAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAccountPage),
  ],
})
export class CreateAccountPageModule {}
*/

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { CreateAccountPage } from './create-account';
import { EqualValidator } from './equal-validator.directive';
import { MyApp } from '../../app/app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MyApp, EqualValidator ],
  bootstrap:    [ MyApp ],
})

export class CreateAccountPageModule { }
