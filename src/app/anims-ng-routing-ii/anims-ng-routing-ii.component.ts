import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';

@Component({
  selector: 'app-anims-ng-routing-ii',
  templateUrl: './anims-ng-routing-ii.component.html',
  styleUrls: ['./anims-ng-routing-ii.component.scss'],
  animations: [fadeHeight],
})
export class AnimsNgRoutingIiComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 1) {
      this.router.navigate(['/a11y']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    this.router.navigate(['/anims/ng-routing']);
  }

  get code() {
    return `export const slideInFromLeft = [
  style({ position: 'relative', 'overflow-x': 'hidden' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ]),
  query(':enter', [style({ left: '-100%', opacity: 0 })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('0.2s ease', style({ left: '100%', opacity: 0 })),
    ]),
    query(':enter', [
      animate('0.2s ease', style({ left: '0%', opacity: 1 })),
    ]),
  ]),
  query(':enter', animateChild()),
];`;
  }
}
