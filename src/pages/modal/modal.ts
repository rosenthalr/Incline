import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TestPage } from '../test/test';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
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

  onCategorySelected(category) {
    this.category = category;
    console.log(category);
    // Navigate to the next page (hasn't been created yet -- next sprint)
    this.navCtrl.push(TestPage);
  }

  // Go back to previous page. If the user is on the first page of the modal, the modal closes
  goBack(){
    this.navCtrl.pop();
  }

}
