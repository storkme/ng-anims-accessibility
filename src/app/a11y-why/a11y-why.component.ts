import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';

@Component({
  selector: 'app-a11y-why',
  templateUrl: './a11y-why.component.html',
  styleUrls: ['./a11y-why.component.scss'],
  animations: [fadeHeight],
})
export class A11yWhyComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 3) {
      this.router.navigate(['/a11y/perceivable']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/a11y']);
    } else {
      this.state--;
    }
  }
}
