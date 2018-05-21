export interface Habit {
    title: string,
    habitBy: string,  //user._id
    habitCategory: string,
    created: Date,
    startDate: Date,
    targetEnd: Date,
    actualEnd: Date,
    reminder: Date,
    streakCounter: number,
    updatedAt: Date,
    customReminder: Date,

}
