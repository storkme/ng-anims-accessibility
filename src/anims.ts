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
      'margin-top': 0,
      'margin-bottom': 0,
    }),
  ),
  state(
    '*',
    style({
      opacity: 1,
      height: '*',
      'margin-top': '*',
      'margin-bottom': '*',
    }),
  ),
  transition(':enter', [style({ overflow: 'hidden' }), animate('.2s ease-in')]),
  transition(':leave', [
    style({ overflow: 'hidden' }),
    animate('.2s ease-out'),
  ]),
]);

export const slideInInitial = [
  style({
    position: 'relative',
    'overflow-x': 'hidden',
  }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ]),
];

/**
 * slide in from left - basically stolen from here https://angular.io/guide/route-animations
 */
export const slideInFromLeft = [
  ...slideInInitial,
  query(':enter', [style({ left: '-100%', opacity: 0 })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate(`0.4s ease`, style({ left: '100%', opacity: 0 })),
    ]),
    query(':enter', [animate(`0.3s ease`, style({ left: '0%', opacity: 1 }))]),
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
      animate(`0.4s ease`, style({ left: '-100%', opacity: 0 })),
    ]),
    query(':enter', [animate(`0.3s ease`, style({ left: '0%', opacity: 1 }))]),
  ]),
  query(':enter', animateChild()),
];
