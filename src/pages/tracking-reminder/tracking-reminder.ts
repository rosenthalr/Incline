import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ModalOptions } from 'ionic-angular';
import { HabitPostService } from '../../services/habitpost.service';
import { ModalCheckboxPage } from '../modal-checkbox/modal-checkbox';
import { ResetStreakModalPage } from '../reset-streak-modal/reset-streak-modal';
/**
 * Generated class for the TrackingReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracking-reminder',
  templateUrl: 'tracking-reminder.html',
})
export class TrackingReminderPage {

  testCheckboxOpen: boolean;
  testCheckboxResult: string;

  constructor(private habitPostService: HabitPostService, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private modal: ModalController) {
  }

  openCheckboxModal() {

    console.log("in open");
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      showBackdrop: false
    };

    const myData = {
      habit: 'habit',
      category: 'color'
    };

    const checkboxModal = this.modal.create('ModalCheckboxPage', { data: myData}, myModalOptions);

    checkboxModal.present();

    checkboxModal.onDidDismiss((data) => {
      console.log("I have dismissed");
      console.log(data);
    });

    checkboxModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });
  }

  openResetModal() {
    
        console.log("in open");
        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false,
          showBackdrop: false
        };
    
        const myData = {
          habit: 'habit',
          category: 'color'
        };
    
        const resetModal = this.modal.create('ResetStreakModalPage', { data: myData}, myModalOptions);
    
        resetModal.present();
    
        resetModal.onDidDismiss((data) => {
          console.log("I have dismissed");
          console.log(data);
        });
    
        resetModal.onWillDismiss((data) => {
          console.log("I'm about to dismiss");
          console.log(data);
        });
      }




  // showCheckbox() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Hmmm...');
  //   alert.setSubTitle('Looks like you did not confirm habits yesterday. Tap the habits that you completed.')

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Habit',
  //     value: 'value1',
  //     checked: true
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Habit',
  //     value: 'value2'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Habit',
  //     value: 'value2'
  //   });

  //   alert.addButton('Cancel');
  //   alert.addButton({
  //     text: 'Okay',
  //     handler: data => {
  //       console.log('Checkbox data:', data);
  //       this.testCheckboxOpen = false;
  //       this.testCheckboxResult = data;
  //     }
  //   });
  //   alert.present();
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingReminderPage');
   
  }

}
