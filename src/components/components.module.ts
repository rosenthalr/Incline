import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NameHabitComponent } from './name-habit/name-habit';
import { CategoriesComponent } from './categories/categories';
import { HabitCircleComponent } from './habit-circle/habit-circle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { HabitCircleService } from './habit-circle/habit-circle.service';
import { HabitCircleConfig } from './habit-circle/habit-circle.config';
import { HabitCircleEase } from './habit-circle/habit-circle.ease';

@NgModule({
	declarations: [
    NameHabitComponent,
    CategoriesComponent,
    HabitCircleComponent,
    ],
	imports: [IonicPageModule,CommonModule],
	exports: [
    NameHabitComponent,
    CategoriesComponent,
    HabitCircleComponent,
    ],
    providers:[
      HabitCircleService,
      HabitCircleConfig,
      HabitCircleEase
    ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
