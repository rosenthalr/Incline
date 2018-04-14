import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage implements OnInit {
  public category: string;

  ngOnInit() {
    this.category = '';
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log(this);
  }

  onCategorySelected(category) {
    this.category = category;
    console.log(category)
  }

}
