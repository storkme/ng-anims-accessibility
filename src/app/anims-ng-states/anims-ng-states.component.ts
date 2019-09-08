import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-anims-ng-states',
  templateUrl: './anims-ng-states.component.html',
  styleUrls: ['./anims-ng-states.component.scss'],
  animations: [
    fadeHeight,
    trigger('bigSmall', [
      state(
        'big',
        style({
          opacity: '*',
        }),
      ),
      state(
        'small',
        style({
          opacity: 0.5,
          transform: 'scale(0.5)',
        }),
      ),
      transition('* => small', [
        style({ 'transform-origin': 'center' }),
        animate('.2s ease-out'),
      ]),
      transition('* => big', [animate('1s ease-in')]),
    ]),
  ],
})
export class AnimsNgStatesComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  buttonState = 'big';

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 3) {
      this.router.navigate(['/anims/ng-routing-intro']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/anims/ng-triggers']);
    } else {
      this.state--;
    }
  }

  get getStateExample() {
    return `trigger('bigSmall', [
  state(
    'big',
    style({
      opacity: '*',
    }),
  ),
  state(
    'small',
    style({
      opacity: 0.2,
      transform: 'scale(0.5)',
    }),
  ),
  transition('* => big', [
    style({ 'transform-origin': 'center' }),
    animate('.2s ease-out'),
  ]),
  transition('* => small', [
    animate('1s ease-in'),
  ]),
]),`;
  }

  get getStateTemplate() {
    return `<button
  [@bigSmall]="size"
  (click)="toggleSize()">
  Button ({{ buttonState }})
</button>`;
  }
}
