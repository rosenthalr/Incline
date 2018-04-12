import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { CategoriesPage } from '../pages/categories/categories';
import { SuccessPage } from '../pages/success/success';
import { TestPage } from '../pages/test/test';
import { CreateAccountPage } from '../pages/create-account/create-account';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // Temporarily changing the rootPage to the categories page for testing purposes
  rootPage:any = CategoriesPage; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

