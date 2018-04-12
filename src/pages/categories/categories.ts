import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'categories.html',
})

export class CategoriesPage {

 constructor(public navCtrl: NavController) {}


}
