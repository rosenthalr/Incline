import {Deserializable} from './deserializable.model'
import {User} from './user'
import * as moment from 'moment';


export class Habit implements Deserializable{
  constructor(
  ){}
  _id: string;
  title:string;
  habitBy:User;
  habitCategory:string;
  updatedAt:string|Date|moment.Moment;
  targetEnd:string|Date|moment.Moment;
  startDate:string|Date|moment.Moment;
  streakCounter:number;
  longestStreakCounter:number;
  updateCounter:number;
  reminder:string|Date|moment.Moment;
  activeHabit:boolean;
  checked:boolean = false;

  deserialize(input:any):this{
    Object.assign(this,input);
    this.habitBy = new User().deserialize(input.habitBy);
    return this;
  }
}
