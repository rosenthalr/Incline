import { Component, EventEmitter, Output } from '@angular/core';
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
  text: string;

  constructor() {
    console.log('Hello StartDateComponent Component');
    this.text = 'Hello World';
  }

  emitGoBack() {
    this.goBack.emit();
  }

}
