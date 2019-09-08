import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeHeight } from '../../anims';

@Component({
  selector: 'app-anims-why',
  templateUrl: './anims-why.component.html',
  styleUrls: ['./anims-why.component.scss'],
  animations: [fadeHeight],
})
export class AnimsWhyComponent implements OnInit {
  @HostBinding('class.slide') slide = true;

  state = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:keydown.arrowright')
  @HostListener('window:keydown.space')
  next() {
    if (this.state === 2) {
      this.router.navigate(['/anims/srsly']);
    } else {
      this.state++;
    }
  }

  @HostListener('window:keydown.arrowleft')
  prev() {
    if (this.state === 0) {
      this.router.navigate(['/anims']);
    } else {
      this.state--;
    }
  }
}
