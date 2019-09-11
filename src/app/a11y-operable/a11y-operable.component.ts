import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a11y-operable',
  templateUrl: './a11y-operable.component.html',
  styleUrls: ['./a11y-operable.component.scss']
})
export class A11yOperableComponent implements OnInit {

  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 4) {
      this.router.navigate(['/a11y/understandable']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/a11y/perceivable']);
    } else {
      this.state--;
    }
  }
}
