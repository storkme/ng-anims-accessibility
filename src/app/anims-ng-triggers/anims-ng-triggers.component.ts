import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';

@Component({
  templateUrl: './anims-ng-triggers.component.html',
  styleUrls: ['./anims-ng-triggers.component.scss'],
  animations: [fadeHeight],
})
export class AnimsNgTriggersComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 6) {
      this.router.navigate(['/anims/ng-states']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/anims/css-transitions']);
    } else {
      this.state--;
    }
  }

  get getHtml() {
    return `<p @fade>Test</p>`;
  }

  get getTrigger() {
    return `@Component({
  ...
  animations: [
    trigger('fade', [
      state(...),
      transition(...),
    ]);
  ]
})`;
  }

  get getTriggerExpr() {
    return `<p [@fade]="fadeState"></p>`;
  }
}
