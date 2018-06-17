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
      ],{ optional: true }),
    ])
]);
export const showDetails = trigger('showDetails',[
    transition('hidden=>shown',[
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
              offset:0.75,
            }),
          ])
        )
      ],{optional:true}),
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
      ],{optional:true}),
      query('.habit.animating', [
        style({
          width: '163px',
          height: '251px',
          margin: '*',
          padding: 10,
        }),
        animate('1s',
          keyframes([
            style({
              width: '163px',
              height: '251px',
              offset:.75
            }),
            style({
              width:'100%',
              height:'100%',
              margin: 0,
              padding: 22,
              offset:1
            })
          ])
        )
      ],{optional:true}),
      query('.habit-col.animating',[
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
              flex:'100%',
              width:'100%',
              height:'100%',
              offset:1
            })
          ])
        )
      ],{optional:true}),
      query('.habit-details',[
        style({
          opacity:0
        }),animate(
          '2s',
          keyframes([
            style({
              opacity:0,
              offset:0.4
            }),
            style({
              opacity:1,
              offset:1
            })
          ])
        )
      ],{optional:true}),
      query('.habit.animating .habit-title h2',[
        style({
          opacity:1,
          'text-align':'left',
          'font-size':'*'
        }),animate(
          '1s',
          keyframes([
            style({
              opacity:0,
              offset:.25
            }),
            style({
              'font-size':22,
              'text-align':'center',
              opacity:0,
              offset:0.5,
            }),
            style({
              opacity:1,
              offset:1
            })
          ])
        )
      ],{optional:true})
    ],),
    transition('shown=>hidden',[
      query(".habit.still", [
        style({
          margin:0,
          padding:0,
          width: 0,
          height: 0,
          opacity: 0
        }),
        animate('1s',
          keyframes([
            style({
              opacity:0,
              margin:0,
              padding:0,
              width: 0,
              height: 0,
              offset: 0.5,
            }),
            style({
              margin:0,
              opacity: 0,
              padding:0,
              height:0,
              width:163,
              offset: .75
            }),
            style({
              margin:'auto',
              padding:10,
              height:251,
              offset: 1
            })
          ])
        )
      ]),
      query('.habit-col.still',[
        style({
          flex: '0%',
          width: '0%',
        }),
        animate('1s',
          keyframes([
            style({
              flex:'0',
              width:'0',
              offset:0.5
            }),
            style({
              flex:'50%',
              width:'50%',
              offset:1
            })
          ])
        )
      ]),
      query('.habit.animating', [
        style({
          width: '100%',
          height: '100%',
          margin: '0',
          padding: 22,
        }),
        animate('1s',
          keyframes([
            style({
              width: '163px',
              height: '251px',
              offset:.5
            }),
            style({
              margin: '*',
              padding: 10,
              offset:1
            })
          ])
        )
      ]),
      query('.habit-col.animating',[
        style({
          flex: '100%',
          width: '100%',
          height:'100%'
        }),
        animate('1s',
          keyframes([
            style({
              flex:'50%',
              width:'50%',
              height:'50%',
              offset:0.5
            })
          ])
        )
      ]),
      query('.habit-details',[
        style({
          opacity:1
        }),animate(
          '1s',
          keyframes([
            style({
              opacity:0,
              offset:0.5
            })
          ])
        )
      ]),
      query('.habit.animating .habit-title h2',[
        style({
          opacity:1,
          'text-align':'center',
          'font-size':22
        }),animate(
          '1s',
          keyframes([
            style({
              opacity:0,
              offset:.25
            }),
            style({
              'font-size':'*',
              'text-align':'left',
              opacity:0,
              offset:0.5,
            }),
            style({
              opacity:1,
              offset:1
            })
          ])
        )
      ])
    ])
  ])

