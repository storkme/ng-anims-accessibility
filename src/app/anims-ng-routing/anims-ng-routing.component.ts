import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';
import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-anims-ng-routing',
  templateUrl: './anims-ng-routing.component.html',
  styleUrls: ['./anims-ng-routing.component.scss'],
  animations: [
    trigger('fadeHeight', [
      state(
        'void',
        style({
          opacity: 0,
          height: 0,
          width: 0,
        }),
      ),
      state(
        '*',
        style({
          opacity: 1,
          height: '*',
          width: '*',
        }),
      ),
      transition(':enter', [
        style({ overflow: 'hidden' }),
        animate('.3s ease-in'),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('.3s ease-out'),
      ]),
    ]),
  ],
})
export class AnimsNgRoutingComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 4) {
      this.router.navigate(['/anims/ng-routing-ii']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/anims/ng-routing-intro']);
    } else {
      this.state--;
    }
  }

  get routes() {
    return `[
  {
    path: 'anims/ng-routing-intro',
    component: AnimsNgRoutingIntroComponent,
    data: { page: 8 },
  },
  {
    path: 'anims/ng-routing',
    component: AnimsNgRoutingComponent,
    data: { page: 9 },
  },
]`;
  }

  get template() {
    return `<div [@routeAnimations]="prepareRoute(outlet)">
  <router-outlet #outlet="outlet"></router-outlet>
</div>`;
  }

  get prepareRoute() {
    return `prepareRoute(outlet: RouterOutlet) {
  return (
    outlet &&
    outlet.activatedRouteData &&
    outlet.activatedRouteData.page
  );
}`;
  }

  get anim() {
    return `trigger('routeAnimations', [
  transition(':increment', slideInFromRight),
  transition(':decrement', slideInFromLeft),
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('.2s ease-in', style({ opacity: 1 })),
      ],
      { optional: true },
    ),
  ]),
]),`;
  }
}
