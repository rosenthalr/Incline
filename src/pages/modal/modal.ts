import { Component, OnInit,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Slides } from 'ionic-angular/components/slides/slides';
import { TabsPage } from '../tabs/tabs';
import * as moment from 'moment';
import { HabitPostService } from '../../services/habitpost.service';
import { Platform } from 'ionic-angular';
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
  private startDate: Date|moment.Moment;
  private minDateOfPicker: String;
  private maxDateOfPicker: String;
  target: string;
  habit;
  reminder;
  currentColor:string;
  habitCategory:string;

  @ViewChild('modalSlider')slides:Slides;
  public category: string;
  public name:string;
  public page:number=1;
  public habitName: string='';

  ngOnInit() {
    this.category = '';
    this.name = this.name == null ? '' : this.name;
    this.page = 1;
  }

  ngAfterViewInit() {
    // child is set
    this.slides.lockSwipes(true);
    console.log(this.name+ 2);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private platform: Platform,
   private habitPostService: HabitPostService) {
    this.name = this.navParams.get('habit');
  }
  closeModal(){
    this.view.dismiss();
  }
  onNamePicked(name){
    this.name = name;
  }
  onReminderPicked(reminder:string):void {
    this.reminder = reminder;
  }
  onCategorySelected(category) {
    this.category = category;
    localStorage.setItem("category", category);
    // Navigate to the next page (hasn't been created yet -- next sprint)
    //this.navCtslideNexttPage);
  }
  getSlideNumber(){
    this.page = this.slides.getActiveIndex()+1;
  }

  // Go back to previous page. If the user is on the first page of the modal, the modal closes
  goBack(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }
  nextPage(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  goToHabitLandingPage(){

    if(!this.reminder) {
      this.reminder = "08:00:00.000Z";
      this.reminder = moment.utc(this.reminder, "HH:mm:ss.SSSZ")
    }


    let habit = {
      title: this.name,
      startDate: moment().startOf('day').toDate(),
      targetEnd: moment().startOf('day').add(21, 'days').toDate(),
      updatedAt: moment().startOf('day').subtract(1,'day').toDate(),
      reminder: this.reminder.toDate(),
      streakCounter: 0,
      activehabit: true,
    };

    this.habitPostService.habitpost(habit).subscribe(
      data => {

        console.log(data.reminder)

        //Set notification below
        var startDate = data.startDate;
        var reminder = data.reminder;
        var reminderHour = moment(reminder).get('hour');
        var reminderMinute = moment(reminder).get('minute');
        var now = moment();


      }
    )
    //this.navCtrl.pop();
    this.navCtrl.push(TabsPage);
  }


}
