import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NameHabitComponent } from './name-habit/name-habit';
import { CategoriesComponent } from './categories/categories';
import { StartDateComponent } from './start-date/start-date';
import { ReminderTimeComponent } from './reminder-time/reminder-time';

@NgModule({
	declarations: [NameHabitComponent,
    CategoriesComponent,
    StartDateComponent,
    ReminderTimeComponent,
    ],
	imports: [IonicPageModule],
	exports: [NameHabitComponent,
    CategoriesComponent,
    StartDateComponent,
    ReminderTimeComponent,
    ]
})
export class ComponentsModule {}
