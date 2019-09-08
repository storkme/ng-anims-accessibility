import { Component, OnInit } from '@angular/core';
import { slideInFromLeft, slideInFromRight } from '../anims';
import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
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
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.page
    );
  }
}
