import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Similar to the above, but also animates margins/paddings/heights, so that any elements in the same layout container
 * will appear to move smoothly.
 */
export const fadeHeight = trigger('fadeHeight', [
  state(
    'void',
    style({
      opacity: 0,
      height: 0,
      margin: 0,
    }),
  ),
  state(
    '*',
    style({
      opacity: 1,
      height: '*',
      margin: '*',
    }),
  ),
  transition(':enter', [style({ overflow: 'hidden' }), animate('.2s ease-in')]),
  transition(':leave', [
    style({ overflow: 'hidden' }),
    animate('.2s ease-out'),
  ]),
]);

/**
 * Useful for animating elements that're being added/removed, but AREN'T affecting the layout of the page
 */
export const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.2s ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('.2s ease-out', style({ opacity: 0 })),
  ]),
]);

export const slideInInitial = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ]),
];

const slideAnimTiming = '.4s';

/**
 * slide in from left - basically stolen from here https://angular.io/guide/route-animations
 */
export const slideInFromLeft = [
  ...slideInInitial,
  query(':enter', [style({ left: '-100%', opacity: 0 })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate(`${slideAnimTiming} ease`, style({ left: '100%', opacity: 0 })),
    ]),
    query(':enter', [
      animate(`${slideAnimTiming} ease`, style({ left: '0%', opacity: 1 })),
    ]),
  ]),
  query(':enter', animateChild()),
];

/**
 * Same as above, but from the right
 */
export const slideInFromRight = [
  ...slideInInitial,
  query(':enter', [style({ left: '100%', opacity: 0 })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate(`${slideAnimTiming} ease`, style({ left: '-100%', opacity: 0 })),
    ]),
    query(':enter', [
      animate(`${slideAnimTiming} ease`, style({ left: '0%', opacity: 1 })),
    ]),
  ]),
  query(':enter', animateChild()),
];
