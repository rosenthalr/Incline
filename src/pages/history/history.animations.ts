import {
  trigger,
  state,
  animate,
  transition,
  query,
  style,
  stagger,
  keyframes,
} from '@angular/animations';

export const habitsEnter = trigger('habitsEnter', [
  transition('void => *', [
    // remember that :enter is a special
    // selector that will return each
    // newly inserted node in the ngFor list
    query(":enter", [
      style({ opacity: 0 }),
      animate('0.5s', style({ opacity: 1 }))
    ],{ optional: true })
  ])
]);
