import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import {HabitProgressComponent} from '../habit-progress/habit-progress';
/**
 * Generated class for the StartDateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'start-date',
  templateUrl: 'start-date.html'
})

export class StartDateComponent implements OnInit {
  @Output() goBack = new EventEmitter<any>();
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();
  state:string;
  current:number;
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ngOnInit() {
    this.state = 'first';
    this.current = 0;
    this.text = '0-3';
  }
  changeState(){
    if(this.state==='first'){
      this.state = 'second';
      this.current = 4;
      this.text = '4-20'
      return;
    }else if(this.state==='second'){
      this.state = 'final'
      this.current = 21;
      this.text = '21+';
      return;
    }else{
      return
    }
  }

  emitGoBack() {
    this.goBack.emit();
  }

  emitNextPage() {
    this.nextPage.emit();
  }
}
