import {
  Component,
  HostBinding,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';

const inputStates = ['focused', 'disabled', 'error'];

@Component({
  selector: 'app-anims-css-transitions',
  templateUrl: './anims-css-transitions.component.html',
  styleUrls: ['./anims-css-transitions.component.scss'],
  animations: [
    fadeHeight,
    trigger('fadeInOut', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.1s ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AnimsCssTransitionsComponent implements OnInit, OnDestroy {
  @HostBinding('class.slide') slide = true;

  notifier = new Subject();
  state = 0;
  inputState: string;

  constructor(private router: Router) {}

  ngOnInit() {
    timer(0, 1000)
      .pipe(takeUntil(this.notifier))
      .subscribe(
        () =>
          (this.inputState =
            inputStates[
              (inputStates.indexOf(this.inputState) + 1) % inputStates.length
            ]),
      );
  }

  ngOnDestroy(): void {
    this.notifier.next();
  }

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 3) {
      this.router.navigate(['/anims/ng-triggers']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/anims/caution']);
    } else {
      this.state--;
    }
  }

  get transitionCss() {
    return `input[type='text'] {
  border: 1px solid transparent;
  transition: border 0.2s ease,
              box-shadow 0.15s ease,
              background 0.2s ease;

  &:focus,
  &.focus {
    border: 1px solid #63b5cf;
    box-shadow: 0 0 0.25rem rgba(#63b5cf, 0.9);
  }

  &.error {
    border: 1px solid #eb2131;
    box-shadow: 0 0 0.5rem #eb2131;
  }

  &:disabled,
  &.disabled {
    background: rgba(200, 200, 200, 0.9);
    border: 1px solid #cccccc;
  }
}`;
  }
}
