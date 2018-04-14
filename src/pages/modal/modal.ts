import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
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
  @ViewChild(Slides) slides: Slides;

  public category: string;
  public isCategoriesActive: boolean;

  ngOnInit() {
    this.category = '';
    this.isCategoriesActive = true;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  closeModal() {
    this.view.dismiss();
  }

  onCategorySelected(category) {
    this.category = category;
    this.changeSlide(1);
  }

  changeSlide(slideIndex: number) {
    this.slides.slideTo(1);
  }

  // Go back to previous slide
  goBack(){
    this.slides.slidePrev();
  }

}
