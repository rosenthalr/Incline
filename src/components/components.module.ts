import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NameHabitComponent } from './name-habit/name-habit';
import { CategoriesComponent } from './categories/categories';
@NgModule({
	declarations: [NameHabitComponent,
    CategoriesComponent],
	imports: [IonicPageModule],
	exports: [NameHabitComponent,
    CategoriesComponent]
})
export class ComponentsModule {}
