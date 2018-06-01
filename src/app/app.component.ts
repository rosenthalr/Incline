import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { SuccessPage } from '../pages/success/success';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { HabitLandingPage } from '../pages/habit-landing/habit-landing';
import { TabsPage } from '../pages/tabs/tabs';
import { DiscoverPage } from '../pages/discover/discover';
import { WorkHabitsPage } from '../pages/work-habits/work-habits';
import { MentalHabitsPage } from '../pages/mental-habits/mental-habits';
import { PhysicalHabitsPage } from '../pages/physical-habits/physical-habits';
import { BasicHabitsPage } from '../pages/basic-habits/basic-habits';
import { AddPresetHabitPage } from '../pages/add-preset-habit/add-preset-habit';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { TestDashboardPage } from '../pages/test-dashboard/test-dashboard';
import { HabitCompletePage } from '../pages/habit-complete/habit-complete';
import { HabitRenewPage } from '../pages/habit-renew/habit-renew';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // Temporarily changing the rootPage to the TabsPage for testing purposes
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,screenOrientation: ScreenOrientation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(platform.is('ios')){
        statusBar.overlaysWebView(true);
        statusBar.styleLightContent();
        statusBar.backgroundColorByName('white');
        screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
      }
      splashScreen.hide();
    });
  }
}

