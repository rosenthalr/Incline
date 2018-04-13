import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FormsModule } from '@angular/forms';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SuccessPage } from '../pages/success/success';
import { TestPage } from '../pages/test/test';
import { CreateAccountPage } from '../pages/create-account/create-account';
// import { HabitLandingPage } from '../pages/habit-landing/habit-landing';

// Including http module for use on login page
import { HttpClientModule } from '@angular/common/http';

// Import LoginService that is used to get users from db
import { LoginService } from "../services/login.service";
import { EqualValidator } from '../pages/create-account/equal-validator.directive';

@NgModule({ 
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SuccessPage,
    TestPage,
    CreateAccountPage,
    EqualValidator,
    // HabitLandingPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SuccessPage,
    TestPage,
    CreateAccountPage,
    // HabitLandingPage
  ],
  providers: [
    StatusBar,
    LoginService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
