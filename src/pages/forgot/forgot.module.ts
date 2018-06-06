import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPage } from './forgot';
import { FormsModule } from '@angular/forms';
import { EqualValidator } from '../create-account/equal-validator.directive';
import { MyApp } from '../../app/app.component';

@NgModule({
  imports:        [ BrowserModule, FormsModule ],
  declarations:   [ MyApp, EqualValidator ],
  bootstrap:      [ MyApp ]
  
})
export class ForgotPageModule {}
