import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesComponent } from './categories/categories';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { HabitProgressComponent } from './habit-progress/habit-progress';
import { HabitProgressConfig } from './habit-progress/habit-progress.config';
import { HabitProgressEase } from './habit-progress/habit-progress.ease';
import { HabitProgressService } from './habit-progress/habit-progress.service';
import { NameHabitComponent } from './name-habit/name-habit';
@NgModule({
	declarations: [
      CategoriesComponent,
      HabitProgressComponent,
      NameHabitComponent
=======
import { StartDateComponent } from './start-date/start-date';
import { ReminderComponent } from './reminder/reminder';

@NgModule({
	declarations: [NameHabitComponent,
    CategoriesComponent,
    StartDateComponent,
    ReminderComponent,
>>>>>>> 2c8f3dfa98d4e321282b355a2d47503641c57d2e
    ],
	imports: [IonicPageModule,CommonModule],
	exports: [
    CategoriesComponent,
<<<<<<< HEAD
    HabitProgressComponent,
    NameHabitComponent
    ],
    providers:[
      HabitProgressConfig,
      HabitProgressEase,
      HabitProgressService
=======
    StartDateComponent,
    ReminderComponent,
>>>>>>> 2c8f3dfa98d4e321282b355a2d47503641c57d2e
    ]
})
export class ComponentsModule {}
