import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';

@Component({
  selector: 'app-a11y-understandable',
  templateUrl: './a11y-understandable.component.html',
  styleUrls: ['./a11y-understandable.component.scss'],
  animations: [fadeHeight]
})
export class A11yUnderstandableComponent implements OnInit {

  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 5) {
      this.router.navigate(['/a11y/robust']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/a11y/operable']);
    } else {
      this.state--;
    }
  }

  get exampleForm() {
    return `<label for="email">Email</label>
<input type="email" id="email" name="email" aria-describedby="email-errors">
<p id="email-errors">This email address isn't valid</p>`;
  }
}
