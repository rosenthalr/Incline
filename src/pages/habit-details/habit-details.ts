import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ModalOptions } from 'ionic-angular';
import { HabitCompletePage } from '../habit-complete/habit-complete';
/**
 * Generated class for the HabitDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habit-details',
  templateUrl: 'habit-details.html',
})
export class HabitDetailsPage {
  title:string;

  constructor(private viewCtrl:ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private modal: ModalController) {
    this.title = navParams.get('title')
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }

    // Temp for styling -- delete after testing
    showModal(){
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: true,
        showBackdrop: true
      };
      let habitCompleteModal = this.modal.create(HabitCompletePage, myModalOptions);
      habitCompleteModal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitDetailsPage');
  }

}
