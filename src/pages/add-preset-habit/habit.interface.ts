import{ User } from '../create-account/user.interface';

export interface Habit {
    title: string,
    habitBy: string,  //user._id
    habitcategory: string,
    created: Date,
    startdate: Date,
    targetend: Date,
    actualend: Date,
    reminder: Date,
    streakcounter: number,    
    updatedAt: Date,
    customreminder: Date,
    
}