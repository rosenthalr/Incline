import {Injectable} from '@angular/core';

export interface HabitProgressDefaults {
  radius?: number;
  animation?: string;
  animationDelay?: number;
  duration?: number;
  stroke?: number;
  color?: string;
  background?: string;
  responsive?: boolean;
  clockwise?: boolean;
  semicircle?: boolean;
  rounded?: boolean;
  max?:number;
  current?: number;
}

@Injectable()
export class HabitProgressConfig {
  private _options: HabitProgressDefaults = {
    radius: 150,
    animation: 'easeOutCubic',
    animationDelay: null,
    duration: 800,
    stroke: 15,
    color: '#0477d6',
    background: '#EAEAEA',
    responsive: false,
    clockwise: true,
    semicircle: false,
    rounded: false,
    max: 21,
    current:1,
  };

  /** Configures the defaults. */
  setDefaults(config: HabitProgressDefaults): HabitProgressDefaults {
    return Object.assign(this._options, config);
  }

  /** Fetches a value from the defaults. */
  get(key: string) {
    return this._options[key];
  }
}
