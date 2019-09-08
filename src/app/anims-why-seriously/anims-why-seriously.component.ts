import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { fadeHeight } from '../../anims';

@Component({
  selector: 'app-anims-why-seriously',
  templateUrl: './anims-why-seriously.component.html',
  styleUrls: ['./anims-why-seriously.component.scss'],
  animations: [fadeHeight],
})
export class AnimsWhySeriouslyComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 3) {
      this.router.navigate(['/anims/caution']);
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
