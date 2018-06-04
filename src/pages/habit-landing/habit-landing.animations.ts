import {
  trigger,
  state,
  animate,
  transition,
  query,
  style,
  keyframes,
} from '@angular/animations';



export const habitsEnter =  trigger('habitsEnter', [
    transition('* => *', [
      // remember that :enter is a special
      // selector that will return each
      // newly inserted node in the ngFor list
      query(":enter", [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ],{ optional: true })
    ])
]);
export const showDetails = trigger('showDetails',[
    transition('*=>shown',[
      query(".habit.still", [
        style({
          width: '163px',
          height: '251px',
          opacity: '1'
        }),
        animate('1s',
          keyframes([
            style({
              opacity:0,
              width: '163px',
              height: '251px',
              offset: 0.25
            }),
            style({
              height:'0px',
              width:'163px',
              offset: 0.5
            }),
            style({
              margin:'0',
              padding:'0',
              width:'0px',
              offset:1,
            }),
          ])
        )
      ]),
      query('.habit-col.still',[
        style({
          flex: '50%',
          width: '50%',
        }),
        animate('1s',
          keyframes([
            style({
              flex:'50%',
              width:'50%',
              offset:0.5
            }),
            style({
              flex:'0%',
              width:'0%',
              height:'0%',
              offset:1
            })
          ])
        )
      ])
    ])
  ])

