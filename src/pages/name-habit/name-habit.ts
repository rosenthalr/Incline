import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides} from 'ionic-angular';


/**
 * Generated class for the NameHabitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-name-habit',
  templateUrl: 'name-habit.html',
})
export class NameHabitPage {
  @ViewChild('habitSlider') habitSlider: Slides;
  public page:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    try{
      this.page = this.habitSlider.getActiveIndex()+1;
    }catch(e){
      this.page = 1
      console.log(e)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NameHabitPage');
  }

}
