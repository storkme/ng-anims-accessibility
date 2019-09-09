import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';

@Component({
  selector: 'app-a11y-intro',
  templateUrl: './a11y-intro.component.html',
  styleUrls: ['./a11y-intro.component.scss'],
  animations: [fadeHeight],
})
export class A11yIntroComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 1) {
      this.router.navigate(['/a11y/why']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/anims/ng-routing-ii']);
    } else {
      this.state--;
    }
  }
}
