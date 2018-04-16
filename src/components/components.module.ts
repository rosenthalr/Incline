import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NameHabitComponent } from './name-habit/name-habit';
import { CategoriesComponent } from './categories/categories';
import { TabsComponent } from './tabs/tabs';
@NgModule({
	declarations: [NameHabitComponent,
    CategoriesComponent,
    TabsComponent],
	imports: [IonicPageModule],
	exports: [NameHabitComponent,
    CategoriesComponent,
    TabsComponent]
})
export class ComponentsModule {}
