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
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // Temporarily changing the rootPage to the categories page for testing purposes
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, private notifications: LocalNotifications, splashScreen: SplashScreen,screenOrientation: ScreenOrientation) {
    platform.ready().then(() => {

      // Start example of local notification that fires every minute
        var now = new Date().getTime();
        var  _5_sec_from_now = new Date(now + 5*1000);
  
        let notification = {
          id: 3,
          title: 'Hi there!',
          text: 'This is a repeating notificaiton',
          firstAt: now,
          every: 'minute'
        };

      this.notifications.schedule(notification);

      // End example of local notification

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

