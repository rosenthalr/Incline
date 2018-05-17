import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation'
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SuccessPage } from '../pages/success/success';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { HabitLandingPage } from '../pages/habit-landing/habit-landing';
import { TabsPage } from '../pages/tabs/tabs';
import { DiscoverPage } from '../pages/discover/discover';
import { HistoryPage } from '../pages/history/history';
import { MorePage } from '../pages/more/more';
import { ForgotPage } from '../pages/forgot/forgot';
import { WorkHabitsPage } from '../pages/work-habits/work-habits';
import { MentalHabitsPage } from '../pages/mental-habits/mental-habits';
import { PhysicalHabitsPage } from '../pages/physical-habits/physical-habits';
import { BasicHabitsPage } from '../pages/basic-habits/basic-habits';
import { AddPresetHabitPage } from '../pages/add-preset-habit/add-preset-habit';




// Including http module for use on login page
import { HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD

// Import LoginService that is used to get users from db
import { LoginService } from "../services/login.service";
import { EqualValidator } from '../pages/create-account/equal-validator.directive';
import { ComponentsModule } from '../components/components.module';
import { TestDashboardPage } from '../pages/test-dashboard/test-dashboard';
=======
// Import Services
import { LoginService } from "../services/login.service";
import { EqualValidator } from '../pages/create-account/equal-validator.directive';
import { ForgotService } from '../services/forgot.service';
import { LogoutService } from '../services/logout.service';
import { ResetService } from '../services/reset.service';
import { MoreResetService } from '../services/morereset.service';
import { HabitPostService } from '../services/habitpost.service';
>>>>>>> 2c8f3dfa98d4e321282b355a2d47503641c57d2e

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SuccessPage,
    CreateAccountPage,
    EqualValidator,
    HabitLandingPage,
    TabsPage,
    DiscoverPage,
    MorePage,
    HistoryPage,
<<<<<<< HEAD
    TestDashboardPage
=======
    ForgotPage,
    WorkHabitsPage,
    MentalHabitsPage,
    PhysicalHabitsPage,
    BasicHabitsPage,
    AddPresetHabitPage
>>>>>>> 2c8f3dfa98d4e321282b355a2d47503641c57d2e
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:'bottom'}),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SuccessPage,
    CreateAccountPage,
    HabitLandingPage,
    TabsPage,
    DiscoverPage,
    MorePage,
    HistoryPage,
<<<<<<< HEAD
    TestDashboardPage,
=======
    ForgotPage,
    WorkHabitsPage,
    MentalHabitsPage,
    PhysicalHabitsPage,
    BasicHabitsPage,
    AddPresetHabitPage
>>>>>>> 2c8f3dfa98d4e321282b355a2d47503641c57d2e
  ],
  providers: [
    StatusBar,
    LoginService,
    SplashScreen,
    StatusBar,
    ScreenOrientation,
    ForgotService,
    LogoutService,
    ResetService,
    MoreResetService,
    HabitPostService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
 