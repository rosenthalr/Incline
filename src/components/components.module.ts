import { NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesComponent } from './categories/categories';
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
    ],
	imports: [IonicPageModule,CommonModule],
	exports: [
    CategoriesComponent,
    HabitProgressComponent,
    NameHabitComponent
    ],
    providers:[
      HabitProgressConfig,
      HabitProgressEase,
      HabitProgressService
    ]
})
export class ComponentsModule  {}
