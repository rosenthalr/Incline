import { Component, OnInit,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Slides } from 'ionic-angular/components/slides/slides';

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
  @ViewChild('modalSlider')slides:Slides;
  public category: string;
  public name:string; 
  ngOnInit() {
    this.category = '';
    this.name = '';
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    this.view.dismiss();
  }
  onNamePicked(name){
    this.name = name;
    console.log(this.name);
  }

  onCategorySelected(category) {
    this.category = category;
    console.log(category);
    // Navigate to the next page (hasn't been created yet -- next sprint)
    //this.navCtslideNexttPage);
  }

  // Go back to previous page. If the user is on the first page of the modal, the modal closes
  goBack(){
    this.slides.slidePrev();
  }
  nextPage(){
    this.slides.slideNext();
  }
}
