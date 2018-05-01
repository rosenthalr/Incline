import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NameHabitComponent } from './name-habit/name-habit';
import { CategoriesComponent } from './categories/categories';
import { StartDateComponent } from './start-date/start-date';
import { ReminderComponent } from './reminder/reminder';

@NgModule({
	declarations: [NameHabitComponent,
    CategoriesComponent,
    StartDateComponent,
    ReminderComponent,
    ],
	imports: [IonicPageModule],
	exports: [NameHabitComponent,
    CategoriesComponent,
    StartDateComponent,
    ReminderComponent,
    ]
})
export class ComponentsModule {}
