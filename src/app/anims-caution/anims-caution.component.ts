import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { fadeHeight } from '../../anims';

@Component({
  selector: 'app-anims-caution',
  templateUrl: './anims-caution.component.html',
  styleUrls: ['./anims-caution.component.scss'],
  animations: [
    trigger('obnoxiousSpin', [
      transition(':enter', [
        style({
          opacity: 0,
          height: 0,
          transform: 'rotate(-720deg) scale(0)',
          'transform-origin': 'center',
        }),
        animate(
          '1s linear',
          style({
            transform: 'rotate(0deg) scale(1)',
            opacity: 1,
            height: '*',
          }),
        ),
      ]),
    ]),
    fadeHeight,
  ],
})
export class AnimsCautionComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 4) {
      this.router.navigate(['/anims/css-transitions']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/anims/why']);
    } else {
      this.state--;
    }
  }
}
