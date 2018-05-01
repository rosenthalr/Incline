import { Component,EventEmitter, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
export class StartDateComponent {
  @Output() goBack = new EventEmitter<any>();
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();
  startDate: Date;
  targetDate: Date;

  setTargetDate() {
    this.targetDate = this.startDate;
    console.log(this.targetDate);
    console.log(this.startDate);
  }

  emitGoBack() {
    this.goBack.emit();
  }

  emitNextPage() {
    this.nextPage.emit();
  }

}
