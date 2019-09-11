import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';

@Component({
  selector: 'app-a11y-perceivable',
  templateUrl: './a11y-perceivable.component.html',
  styleUrls: ['./a11y-perceivable.component.scss'],
  animations: [fadeHeight],
})
export class A11yPerceivableComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 5) {
      this.router.navigate(['/a11y/operable']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/a11y/why']);
    } else {
      this.state--;
    }
  }

  get exampleGood() {
    return `<main>
  <section>
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
  </section>
</main>`;
  }

  get exampleBad() {
    return `<div class="main">
  <div class="section">
    <label>Email</label><br/>
    <input type="text">
  </div>
</div>`;
  }
}
